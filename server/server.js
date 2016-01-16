'use strict';
var http       = require('http');
var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var React      = require('react');
var port       = process.env.PORT || 4000;  
var https 	   = require('https');
var router     = express.Router();


app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/../'));
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));


app.post('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.get('/user', function(req, res) {
  res.send('Send user info');
});


app.listen(port);
console.log('Server Running on ' + port);