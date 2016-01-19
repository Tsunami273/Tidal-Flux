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

var player = [{name: 'fest', password: '123'}];
var messages = [];

app.use('/',router);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/player/signup', function(req, res){
	player.push(req.body);
	console.log('signup req: ', player);
	res.send(200, 'player logged in');
});

app.post('/api/player/signin', function(req, res){
	console.log('Test signin req: ', req.body);
	for(var i = 0; i < player.length; i++) {
		if (req.body.name === player[i].name && req.body.password === player[i].password) {
			console.log('signin req: ', req.body);
			res.send(200, 'player logged in');
		} else {
			res.send(403, 'Forbidden');
		}
	}
});

router.get('/',function(req,res){
  res.json({'error' : false, 'message' : 'Hello !'});
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