const { Schema, model } = require('mongoose');
const responseSchema = require('./Response');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postType: {
      type: String,
      required: true
    },
    postCategory: {
      type: String,
      required: true
    },
    postTitle: {
      type: String,
      required: true,
      trim: true
    },
    postPrice: {
      type: String,
      required: true,
      trim: true
    },
    postDescription: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    responses: [responseSchema]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

postSchema.virtual('responseCount').get(function() {
  return this.responses.length;
});

const Post = model('Post', postSchema);

module.exports = Post;