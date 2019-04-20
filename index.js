const express = require('express');
const pug = require('pug');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});


const { listado } = require('./listado');

app.post('/', (req, res) => {
  const num = parseInt(req.body.num, 10);
  let nickname = '';
  let counter = 0;
  while (counter < num) {
    nickname += listado[Math.floor(Math.random() * listado.length)];
    counter += 1;
  }

  res.render('index', { result: nickname, quantity: num });
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
