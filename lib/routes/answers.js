const { Router } = require('express');
const Answer = require('../models/answers');

module.exports = Router()

// get all answers
  .get('/', (req, res, next) => {
    Answer
      .find()
      .then(resp => res.send(resp))
      .catch(next);

  })

// get all answers for one question
  .get('/:id', (req, res, next) => {
    Answer
      .find({ questionId: req.params.id })
      .populate('Question')
      .lean()
      .then(answer => res.send(answer))
      .catch(next);
  });


