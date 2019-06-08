require('dotenv').config();
require('../../lib/utils/connect')();

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../lib/app');

describe('answers routes', () => {

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can get a list of answers for a question by ID', () => {
    return request(app)
      .get('/answers/5cfbfcf1a580e53cc8216b14')
      .then(res => res.body)
      .then(answers => {
        expect(answers).toHaveLength(3);
      });
  });
});

