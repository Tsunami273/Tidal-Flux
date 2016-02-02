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
var nodemailer = require('nodemailer');
var dog        = 'dog';


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.urlencoded({ extended: true }));

var transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "tidalflux273@gmail.com",
        pass: "tsunami273"
    }
});

app.get('/passwordReset', function (req, res){
    res.sendfile(path.join(__dirname + '/../passwordReset.html'));
});

app.post('/passwordReset', function (req,res){
    var token = req.body.token;
    var userObj = jwt.decode(token, dog);
    console.log('userObj', userObj);
    bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
        models.Player.update({username: userObj.username}, {$set: {password: hashPassword}}, function(err, data){
            if(err){
              res.sendfile(path.join(__dirname + '/../passwordFailed.html'));
            }
            else{
              res.sendfile(path.join(__dirname + '/../passwordChanged.html'));
            }
        });
    });
});

app.get('/api/scores', function(req, res){
  models.Score.find(req.query)
  .select('difficulty songId points username')
  .sort({songId: 1})
  .then(function(data){
    res.status(200).json(data);
  })
});

app.post('/api/player/signup', function(req, res){
	//Check if the player is in the database
	models.Player.findOne({ username: req.body.username})
    .exec(function (err, player) {
    	if (err) { 
    		res.status(403).json(err);
    	}

    	if (player) {          
      //Notify if the player player is already registered
    		res.status(401).json({ message: 'User already exists'});
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
						//Generate new token 
				        var sessionToken = jwt.encode({username: player.username}, dog);
				        //Session information
						var session = {token: sessionToken, username: player.username, keybinds: player.keybinds, offset: player.offset}
	    		  		res.status(200).json(session);
					}
				});
			});
    	}
    });
});


app.post('/api/player/signin', function(req, res) {
	//Fetch and validate player
	models.Player.findOne({ username: req.body.username })
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
    	    			var sessionToken = jwt.encode({username: player.username}, dog);

    	    			var session = {token: sessionToken, username: player.username, keybinds: player.keybinds, offset: player.offset}
    	    		    res.status(200).json(session);
    	    		}  
	    	});
	    }
    });
 });



app.post('/api/player/score', function(req, res){

    if(req.body.points > 1000000 || !req.body.hits){
        res.status(400).json({hey:'no cheating'});
        return;
    }
    //Decode token to get player name 
    var userObj = jwt.decode(req.body.token, dog);

	//Find player in the song table
	models.Score.findOne({ username: userObj.username, songId: req.body.songId, difficulty: req.body.difficulty})
    .exec(function (err, player) {
    	if (err) { 
    		res.status(403).json(err);
    	}
    	if (!player) {                            
      //If this is the first time the player is playing
    		var score = new models.Score();

    		score.username = userObj.username;
    		score.points = req.body.points;
    		score.songId = req.body.songId;
    		score.difficulty = req.body.difficulty;
            score.hits = req.body.hits;

    		score.save(function (err, score) {
    			if(err) {
    				res.status(403).json(err);
    			} else {
    				res.status(200).json({ highscore: 0});
    			}
    		});
    	} 
    	if (player) {     // If the player has played played before
    		if (req.body.points <= player.points) {  //New score lower than the existing one
				res.status(200).json({message:'Low', highscore: player.points});
			}

    		if(req.body.points > player.points) {   //New High Score

    		    player.points = req.body.points;

    		    //Save the new high score
				player.save(function (err, score) {
					if(err) {
						res.status(403).json(err);
					} else {
						res.status(200).json({message:'New high', highscore: player.points});
					}
				});
    		}
    	}
    });
})

app.post('/api/player/keybinds', function(req, res) {
  var userObj = jwt.decode(req.body.token, dog);

  models.Player.update({username: userObj.username}, {$set: {keybinds: req.body.keybinds}}, function(err, data){
    if(err){
      res.status(500).json({message: 'Something Happened'});
    }
    else{
      res.status(200).json({message:'Updated Keybinds Successfully', data:data});
    }
  })

});

app.post('/api/player/offset', function(req, res) {
    var userObj = jwt.decode(req.body.token, dog);

    models.Player.update({username: userObj.username}, {$set: {offset: req.body.offset}}, function(err, data){
        if(err){
            res.status(500).json({message: 'Something Happened'});
        } else {
            res.status(200).json({message:'Updated Offset Successfully', data:data});
        }
    })

});

app.post('/api/player/profile', function (req, res) {
	playerProfile(req, res);
});

app.post('/api/rankings', function (req, res) {
	playerRankings(req, res);
});

//***********EMAIL***************/
app.get('/api/player/password/reset', function (req, res){

    var email = req.query.email;
    console.log('email', email);
    models.Player
    .find(req.query)
    .select('username email')
    .then(function(data){
        console.log('data', data);
        var token = jwt.encode({username: data[0].username}, dog);
        console.log('token', token);
        console.log('data.email', data[0].email);
        console.log('data.username', data[0].username);
        var mailData= {
            from: "Team Tsunami <tidalflux273@gmail.com>", // sender address
            to: data[0].email, // list of receivers
            subject: "Tidal Flux password reset", // Subject line
            text: "Hello world", // plaintext body
            html: "<b>Hello "+data[0].username +" please reset your password: <a href=tidal-flux.herokuapp.com/passwordReset?token=" + token + ">password reset<a></b>" // html body
        };
        transport.sendMail(mailData, function(err, info){
            if(err){
                console.log('Email Error:', err);
            }
            else {
                console.log('info', info);
            }
        });
        res.status(200).json(data);
    });

})



app.listen(port);
console.log('Server Running on ' + port);