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
				res.status(403).json(err);
			} else {
				res.status(200).json(player)
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
    		res.status(403).send('Forbidden');
    	}
    	//Validate password
    	bcrypt.compare(req.body.password, player.password, function (err, valid) {
    		if (err) {
    			res.status(403).json(err);
    		}
    		if(!valid) {
    			res.status(403).send('Forbidden');
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
	//Find player in the song table
	models.Score.findOne({ user: req.body.username, song: req.body.song, difficulty: req.body.difficulty})
    .exec(function (err, record) {
    	console.log('Player record retrieval: ', !record)
    	if (err) { 
    		res.status(403).json(err); 
    		console.log('Error during Find: ', err);
    	}
    	if (!record) {                            //If this is the first time the player is playing
    		var score = new models.Score();


    		score.user = req.body.username;
    		score.points = req.body.points;
    		score.song = req.body.song;
    		score.difficulty = req.body.difficulty;

    		score.save(function (err, score) {
    			if(err) {
    				res.status(403).json(err);
    				console.log('Error During adding Duplicate Record: ', err);
    			} else {
    				res.status(200).json(score);
    			}
    		});
    	} 
    	// For a player that has played before
    	if (record) {
    		//New score lower than the existing one
    		if (req.body.points <= record.points) { 
				res.status(200).send('Nice try')
				console.log('Nice Try:')
			}

			//New High Score
    		if(req.body.score > record.score) {
    			var score = new models.Score();

    			score.user = req.body.username;
    		    score.points = req.body.points;
    		    score.song = req.body.song;
    		    score.difficulty = req.body.difficulty;

    		    console.log('Scores for new song....: ', score);
				score.update(function (err, score) {
					if(err) {
						console.log('Error: ', err);
						res.status(403).json(err);
						
					} else {
						res.status(200).json(score);
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