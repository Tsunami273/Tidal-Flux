'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://tidal:tidal@ds047355.mongolab.com:47355/tidal');
var db = mongoose.connection;
var Schema = mongoose.Schema;

 
var playerSchema = new Schema({
	username   : { type: String, required: true, unique: true },
	email      : { type: String, required: true, unique: true },
	password   : { type: String, required: true },
	age 	   : Number,
	created_at : Date,
    updated_at : Date, 
    avatar	   : String
});

var Player = mongoose.model('Player', playerSchema);
module.exports.Player = Player;