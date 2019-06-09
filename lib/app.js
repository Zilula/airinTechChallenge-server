/* eslint-disable no-console*/

const express = require('express');
const app = express();
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');
const connection = require('./middleware/connection');
const questions = require('./routes/questions');
const answers = require('./routes/answers');

app.use(require('./middleware/cors'));

app.use(express.json());

app.use('/questions', connection, questions);
app.use('/answers', connection, answers);

app.use(notFound);

app.use(handler);

module.exports = app;
