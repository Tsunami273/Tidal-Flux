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
	//Check if the player is in the database
	models.Player.findOne({ username: req.body.username})
    .exec(function (err, player) {
    	if (err) { 
    		res.status(403).json(err);
    	}

    	if (player) {          
      //Notify if the player player is already registered
    		res.status(200).json({ message: 'User already exists'});
    	}

    	if (!player) {
			// Create new player to save player to database
			var player = new models.Player();

			player.email = req.body.email;
			player.username = req.body.username;
      player.keybinds = req.body.keybinds;
      player.offset = req.body.offset;

			//Encrypt password
			bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
				player.password = hashPassword;

				//Save player to database with hashed password
				player.save(function (err, player) {
					if(err) {
						res.status(403).json(err);
					} else {
						res.status(200).json(player);
					}
				});
			});
    	}
    });
});


app.post('/api/player/signin', function(req, res) {

	//Fetch and validate player
	models.Player.findOne({ username: req.body.username })
	.select('password').select('username')
    .exec(function (err, player) {
    	if (err) { return err }
    	if (!player) { 
    		res.status(403).json({ message: 'Forbidden'});
    	}
    	if (player) {
	    	//Validate password
	    	bcrypt.compare(req.body.password, player.password, function (err, valid) {
	    		if (err) {
	    			res.status(403).json(err);
	    		}
	    		if(!valid) {
	    			res.status(403).json({ message: 'Forbidden'});
	    		} 
	    		if(valid) {
	    			//Generate token
	    		    // var token = jwt.encode({username: player.username}, mysecret.secret)
	    		    res.status(200).json(player);
	    		} 
	    	});
	    }
    });
 });



app.post('/api/player/score', function(req, res){
	console.log('Score request after game play: ', req.body);
	//Find player in the song table
	models.Score.findOne({ username: req.body.username, songId: req.body.songId, difficulty: req.body.difficulty})
    .exec(function (err, player) {
    	if (err) { 
    		res.status(403).json(err);
    	}
    	if (!player) {                            
      //If this is the first time the player is playing
    		var score = new models.Score();

    		score.username = req.body.username;
    		score.points = req.body.points;
    		score.songId = req.body.songId;
    		score.difficulty = req.body.difficulty;

    		score.save(function (err, score) {
    			if(err) {
    				res.status(403).json(err);
    			} else {
    				res.status(200).json(score);
    			}
    		});
    	} 
    	if (player) {     // If the player has played played before
    		if (req.body.points <= player.points) {  //New score lower than the existing one
				res.status(200).json({message:'low'});
			}

    		if(req.body.points > player.points) {   //New High Score

    		    player.points = req.body.points;

    		    //Save the new high score
				player.save(function (err, score) {
					if(err) {
						res.status(403).json(err);
					} else {
						res.status(200).json({message:'high'});
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