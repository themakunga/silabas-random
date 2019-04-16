const express = require('express');
const pug = require('pug');
const http = require('http');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
