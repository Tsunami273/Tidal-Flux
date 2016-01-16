'use strict';
var http       = require('http');
var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var React      = require('react');
var port       = process.env.PORT || 4000;  
var https 	   = require('https');
var router     = express.Router();
var logger     = require('morgan')



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../'));



app.post('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.get('/user', function(req, res) {
  res.send('Send user info');
});


app.listen(port);
console.log('Server Running on ' + port);