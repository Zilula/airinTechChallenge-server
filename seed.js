require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const seedData = require('./seedData');


seedData(125, 500)
  .then(() => console.log('done loading data'))
  .catch(err => console.error(err))
  .finally(() => mongoose.connection.close());
