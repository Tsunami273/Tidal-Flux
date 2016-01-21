'use strict';
var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var port       = process.env.PORT || 4000;  
var router     = express.Router();
var logger     = require('morgan');
var path       = require('path');
var Player     = require("./mongodb");
var mongoose = require('mongoose');

var player = [{email: 'email@email.com', username: 'fest', password: '123'}];
var messages = [];

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/player/signup', function(req, res){
	// save user to database
	var newPlayer = new Player(req.body);

	//save user to database
	newPlayer.save(function(err) {
	    if (err) throw err;
	    console.log('signup req: ', req.body);
		res.send(200, 'player logged in');
	});
});

app.post('/api/player/signin', function(req, res){
	// fetch user and test password verification
	Player.findOne({ username: req.body.username }, function(err, user) {
	    if (err) throw err;

	    // test a matching password
	    user.comparePassword(req.body.password, function(err, isMatch) {
	        if (err) throw err;
	        console.log('Password check: ', isMatch);
	        if (isMatch) {
	        	res.send(200, 'player logged in');
	        }
	        if (isMatch) {
	        	res.send(403, 'Forbidden');
	        }
	    });
	});
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
