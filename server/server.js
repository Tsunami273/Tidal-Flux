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
app.post('/api/player/signup', function(req, res){
	signup(req, res, res.send);
});

app.post('/api/player/signin', function(req, res){
	signin(req, res, res.send);
});

app.post('/api/player/messages', function(req, res){
	messages(req, res, res.send)
})

app.post('/api/player/profile', function (req, res) {
	playerProfile(req, res);
});

app.post('/api/rankings', function (req, res) {
	playerRankings(req, res);
});



app.listen(port);
console.log('Server Running on ' + port);