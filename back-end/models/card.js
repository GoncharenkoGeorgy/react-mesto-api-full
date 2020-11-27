const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const cardSchema = new Schema({
  likes: {
    type: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    default: [],
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^https?:\/\/(www\.)?[\w-.~:/?#[\]@!$&'()*+,;=]+#?$/.test(v);
      },
      message: 'Ссылка введена неверно',
    },
  },
  owner: {
    type: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('card', cardSchema);
