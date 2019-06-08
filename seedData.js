const Question = require('./lib/models/questions');
const Answer = require('./lib/models/answers');
const chance = require('chance').Chance();

module.exports = () => {
  return Promise.all([...Array(60)].map(() => {
    return Question
      .create({
        question: chance.sentence()
      });
  }))
    .then(questions => {
      return Promise.all([...Array(200)].map(() => {
        return Answer
          .create({
            answer: chance.sentence(),
            questionId: chance.pickone(questions)._id
          });
      }));
    });
};


