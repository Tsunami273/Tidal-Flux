'use strict';
var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var port       = process.env.PORT || 4000;  
var router     = express.Router();
var logger     = require('morgan');
var path       = require('path');
var Player     = require("./mongodb");
var mongoose   = require('mongoose');
var bcrypt     = require('bcrypt-nodejs');


var player = [{email: 'email@email.com', username: 'fest', password: '123'}];
var messages = [];

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/player/signup', function(req, res){
	// save user to database
	var player = new Player();

	

	player.email = req.body.email;
	player.username = req.body.username;
	player.password = req.body.password;

	//save new player in Database
	player.save(function ( err, player) {
		if (err) {
			return err;
		}
		res.send(200, 'player logged in');
	});
});



app.post('/api/player/signin', function(req, res){
	var signinPassword = req.body.password;

	//Fetch and validate user
	Player.findOne({ username: req.body.username }, function(err, user) {
		var user = JSON.stringify(user);
	    if (err) {
	    	return err;
	    }
	    //Saved passsword in database
	    var savedPassword = user.password;

	    if (savedPassword === signinPassword) {
	    	res.send(200, 'player logged in');
	    } else {
	    	res.send(403, 'Forbidden');
	    }
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