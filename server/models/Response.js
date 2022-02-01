const { Schema, model } = require('mongoose');

const responseSchema = new Schema (
  {
    responseText: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    postTitle: {
      type: String,
      required: true,
      trim: true
    }
  }
);

const Response = model('Response', responseSchema);

module.exports = Response;