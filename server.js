const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const express = require('express');
const app = express();
require('dotenv').config();
require('./config/database');

const toDoRouter = require('./routes/api/todos');
const toBuyRouter = require('./routes/api/tobuys');

const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());

app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/todos', toDoRouter)
app.use('/api/tobuys', toBuyRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });