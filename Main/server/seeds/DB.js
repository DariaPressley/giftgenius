const models = require('../models');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/GiftGenius');

module.exports = mongoose;