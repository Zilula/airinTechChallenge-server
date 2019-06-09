const { Router } = require('express');
const Question = require('../models/questions');

module.exports = Router();

module.exports = Router()

  .get('/querying/paging', (req, res, next) => {
    
    const query = {};
    const { page = 1, perPage = 20, search } = req.query;

    if(search) {
      query.question = {
        $regex: new RegExp(search, 'i')
      };
    }

    Question
      .find(query)
      .skip(+perPage * (+page - 1))
      .limit(+perPage)
      .select({ __v: false })
      .then(questions => res.send(questions))
      .catch(next);
  })

  // get all 
  .get('/', (req, res, next) => {
    Question
      .find()
      .then(resp => res.send(resp))
      .catch(next);

  })
  // get by id
  .get('/:id', (req, res, next) => {
    Question
      .find({ _id: req.params.id })
      .lean()
      .then(question => res.send(question))
      .catch(next);
  });

