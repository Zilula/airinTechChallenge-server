const Answer = require('../../lib/models/answers');

describe('validates answer model', () => {
  it('tests the answer models', () => {
    const answer = new Answer({
      answer: 'some Answer',
      questionId: 'someMongoDBiD'
    });
    expect(answer.toJSON()).toEqual({
      _id: answer._id,
      answer: 'some Answer',
      questionId: answer.questionId
    });
  });
});


