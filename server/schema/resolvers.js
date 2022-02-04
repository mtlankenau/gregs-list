const { User, Post } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parents, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('posts');

          return userData;
      }

      throw new AuthenticationError('User not logged in!');
    },

    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('posts');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('posts');
    },

    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    }
  },
  Mutation: {
    addUser: async(parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async(parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Invalid username and/or password');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Invalid username and/or password');
      }

      const token = signToken(user);
      return { token, user };
    },

    addPost: async(parents, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }

      throw new AuthenticationError('You need to be logged in before creating a post!');
    },

    addResponse: async (parent, { postId, responseText }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { responses: { responseText, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedPost;
      }

      throw new AuthenticationError('You need to be logged in before responding to a post!');
    },

    deletePost: async (parent, { postId }, context) => {


      if(context.user) {
      const deletedPost = await Post.findOneAndDelete({_id: postId});
      const updatedUser = await User.findOneAndUpdate(
          {_id: context.user.id},
          {$pull: { posts: postId }},
          {new: true}
      );
  
      return updatedUser;
      }
      
      }
  }
};

module.exports = resolvers;