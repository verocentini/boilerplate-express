let express = require('express');
let app = express();

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// freeCodeCamp necesita esto:
module.exports = app;



































 module.exports = app;
