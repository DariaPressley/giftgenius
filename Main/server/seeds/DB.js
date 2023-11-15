const models = require('../models');
const db = require('../config/connection');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/GiftGenius', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;