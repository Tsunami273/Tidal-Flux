'use strict';
var http       = require('http');
var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var React      = require('react');
var port       = process.env.PORT || 4000;  
var https 	   = require('https');
var router     = express.Router();
var logger     = require('morgan');
var path       = require('path');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../'));
//
app.post('/api/users/signup', function(req, res){
	signup(req, res, res.send);
});

app.post('/api/users/signin', function(req, res){
	signin(req, res, res.send);
});

app.post('/api/users/profile', function (req, res) {
	returnProfile(req, res);
});

app.post('/api/rankings', function (req, res) {
  returnRankings(req, res);
});


app.listen(port);
console.log('Server Running on ' + port);