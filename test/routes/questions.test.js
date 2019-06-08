require('dotenv').config();
require('../../lib/utils/connect')();

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../lib/app');

describe('questions routes', () => {

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can get a list of questions', () => {
    return request(app)
      .get('/questions')
      .then(res => res.body)
      .then(questions => {
        expect(questions).toHaveLength(60);
      });
  });
  it('can get a page of questions', () => {
    return request(app)
      .get('/questions/querying/paging?page=2')
      .then(res => res.body)
      .then(questions => {
        expect(questions).toHaveLength(20);
      });
  });
  it('can search by a keyword and return a list of questions', () => {
    return request(app)
      .get('/questions/querying/paging?page=1&search=da')
      .then(res => res.body)
      .then(questions => {
        expect(questions).toHaveLength(18);
      });
  });
});
