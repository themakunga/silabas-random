const express = require('express');
const pug = require('pug');
const http = require('http');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
