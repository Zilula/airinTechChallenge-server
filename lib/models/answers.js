const mongoose = require('mongoose');

const answersSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true
  },
  questionId: {
    ref: 'Question',
    type: mongoose.Schema.Types.ObjectId
  },
});

module.exports = mongoose.model('Answer', answersSchema);
