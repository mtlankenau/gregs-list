const { User, Post } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
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