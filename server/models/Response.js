const { Schema } = require('mongoose');

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
    }
  }
);

module.exports = responseSchema;