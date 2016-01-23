'use strict';
var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var port       = process.env.PORT || 4000;  
var router     = express.Router();
var logger     = require('morgan');
var path       = require('path');
var models     = require("./mongodb");
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
	var player = new models.Player();
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
		});
	});
});


app.post('/api/player/signin', function(req, res) {

	//Fetch and validate player
	models.Player.findOne({ username: req.body.username })
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
    		    res.status(200).json(player);
    		    console.log('SIGNIN SUCCESSFUL');
    		} 
    	});
    });
 });



app.post('/api/player/score', function(req, res){
	console.log('New scores: ', req.body);
	//Find player in the song table
	models.Score.findOne({ username: req.body.username })
	.select('username').select('score')
    .exec(function (err, player) {
    	if (err) { 
    		return err 
    	}
    	if (!player) {                                //If this is the first time the player is playing
    		var score = new Score();
    		score.save(function (err, score) {
    			if(err) {
    				return res.status(403).json(err);
    			} else {
    				return res.status(200).json(score);
    			}
    		});
    	} 
    	//For a player that has played before
    	if (player) {
    		//Compare current score with the one saved in the database
    		if (req.body.score < player.score) {   //New score lower than the existing one
    			res.status(200).send('Nice try')
    		}
    		//New high score
    		if (req.body.score > player.score) {
    			score.modified = new models.Score();

    			score.update(function (err, score) { //Updates score with new high score
    				if(err) {
    					return res.status(403).json(err);
    				} else {
    					return res.status(200).json(score);
    				}
    			});
    		} 
    	}
    });
})

app.post('/api/player/profile', function (req, res) {
	playerProfile(req, res);
});

app.post('/api/rankings', function (req, res) {
	playerRankings(req, res);
});


app.listen(port);
console.log('Server Running on ' + port);