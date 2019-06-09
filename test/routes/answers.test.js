require('dotenv').config();
require('../../lib/utils/connect')();

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../lib/app');
const getQuestion = require('../dataHelpers');

describe('answers routes', () => {

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can get a list of answers for a question by ID', async() => {
    const { _id } = await getQuestion();

    return request(app)
      .get(`/answers/${_id}`)
      .then(res => res.body)
      .then(answers => {
        expect(answers).toHaveLength(answers.length);
      });
  });
});

