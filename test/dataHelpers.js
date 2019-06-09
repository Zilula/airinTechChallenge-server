require('dotenv').config();
const Question = require('../lib/models/questions');


const getQuestion = () => {
  return Question
    .findOne()
    .then(note => {
      return JSON.parse(JSON.stringify(note));
    });
};

module.exports = getQuestion;
