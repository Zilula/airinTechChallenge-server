require('dotenv').config();
const Question = require('../lib/models/questions');


const getQuestion = () => {
  return Question
    .findOne()
    .then(question => {
      return JSON.parse(JSON.stringify(question));
    });
};

module.exports = getQuestion;
