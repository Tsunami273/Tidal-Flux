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
var bcrypt     = require('bcryptjs');
var jwt        = require('jwt-simple');
var mysecret   = require('./secret');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/player/signup', function(req, res){
	// Create ne player to save player to database
	var player = new Player();
	player.email = req.body.email;
	player.username = req.body.username;

	
	//Encrypt password
	bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
		player.password = hashPassword;

		//Save player to database with hashed password
		player.save(function (err, player) {
			if(err) {
				return res.status(403).json(err);
			} else {
				return res.status(200).json(player)
				console.log('SIGNUP SUCCESSFUL')
			}
		})
	});
});


app.post('/api/player/signin', function(req, res) {

	//Fetch and validate player
	Player.findOne({ username: req.body.username })
	.select('password').select('username')
    .exec(function (err, player) {
    	if (err) { return err }
    	if (!player) { 
    		return res.status(403).send('Forbidden');
    	}
    	//Validate password
    	bcrypt.compare(req.body.password, player.password, function (err, valid) {
    		if (err) {
    			return res.status(403).json(err);
    		}
    		if(!valid) {
    			return res.status(403).send('Forbidden');
    		} 
    		if(valid) {
    			//Generate token
    		    // var token = jwt.encode({username: player.username}, mysecret.secret)
    		    console.log("Login in Player: ", player`);
    		    res.status(200).json(player);
    		    console.log('SIGNIN SUCCESSFUL');
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