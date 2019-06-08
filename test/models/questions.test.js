const Question = require('../../lib/models/questions');
// const mongoose = require('mongoose');


describe('validates Question model', () => {
  it('tests the Question models', () => {
    const question = new Question({
      question: 'something'
    });
    expect(question.toJSON()).toEqual({
      _id: question._id,
      question: 'something',
    });
  });
});


