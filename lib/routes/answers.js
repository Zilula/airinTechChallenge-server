const { Router } = require('express');
const Answer = require('../models/answers');

module.exports = Router();

module.exports = Router()

// get all 
  .get('/', (req, res, next) => {
    Answer
      .find()
      .then(resp => res.send(resp))
      .catch(next);

  })
// get by id
//   .get('/:id', (req, res, next) => {
//     console.log('hello', req.params.id);
//     Answer
//       .findById(req.params.id)
//       .lean()
//       .then(answer => res.send(answer))
//       .catch(next);
//   })



// get all answers for one question
  .get('/:id', (req, res, next) => {
    console.log('hello', req.params.id);
    Answer
      .find({ questionId: req.params.id })
      .populate('Question')
      .lean()
      .then(answer => res.send(answer))
      .catch(next);
  })




// post one
  .post('/', (req, res, next) => {

    Answer
      .create({ answer: req.body.answer })
      .then(resp => res.send(resp.body))
      .catch(next);
  })
;
