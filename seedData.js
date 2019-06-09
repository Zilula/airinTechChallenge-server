const Question = require('./lib/models/questions');
const Answer = require('./lib/models/answers');
const chance = require('chance').Chance();

module.exports = (questions, answers) => {
  return Promise.all([...Array(questions)].map(() => {
    return Question
      .create({
        question: chance.sentence()
      });
  }))
    .then(questions => {
      return Promise.all([...Array(answers)].map(() => {
        return Answer
          .create({
            answer: chance.sentence(),
            questionId: chance.pickone(questions)._id
          });
      }));
    });
};


