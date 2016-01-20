'use strict';
var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var port       = process.env.PORT || 4000;  
var router     = express.Router();
var logger     = require('morgan');
var path       = require('path');
var Player         = require("./mongodb");

var player = [{email: 'email@email.com', username: 'fest', password: '123'}];
var messages = [];

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/player/signup', function(req, res){
	var testPlayer = new Player(req.body);

	// save user to database
	testPlayer.save(function(err) {
	    if (err) throw err;
	});

	player.push(req.body); //Need to substitude with database
	console.log('signup req: ', req.body);
	res.send(200, 'player logged in');
});

app.post('/api/player/signin', function(req, res){
	console.log('Test signin req: ', req.body);
	for(var i = 0; i < player.length; i++) {
		if (req.body.username === player[i].username && req.body.password === player[i].password) {
			console.log('signin req: ', req.body);
			res.send(200, 'player logged in');
		} else {
			res.send(403, 'Forbidden');
		}
	}
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
