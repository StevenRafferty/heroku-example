const express = require('express');

const config = require('./config');
const { connectDb } = require('./db');

const app = express();

const init = async () => {
  
  await connectDb()

  app.listen(config.port);
};

init();
