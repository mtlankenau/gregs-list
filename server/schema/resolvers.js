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
    addUser: async(parents, args) => {
      const user = await User.create(args);
      return user;
    },

    addPost: async(parents, args) => {
      const post = await Post.create(args);
      return post;
    }
  }
};

module.exports = resolvers;