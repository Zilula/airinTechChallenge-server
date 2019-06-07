const { Router } = require('express');
const Question = require('../models/questions');

module.exports = Router();

module.exports = Router()

  // get all 
  .get('/', (req, res, next) => {
    Question
      .find()
      .then(resp => res.send(resp))
      .catch(next);

  })
  // get by id
  .get('/:id', (req, res, next) => {
    console.log('hello', req.params.id);
    Question
      .findById(req.params.id)
      .lean()
      .then(question => res.send(question))
      .catch(next);
  })
  // post one
  .post('/', (req, res, next) => {

    Question
      .create({ question: req.body.question })
      .then(resp => res.send(resp.body))
      .catch(next);
  })
;
