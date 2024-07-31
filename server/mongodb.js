'use strict';
var creds = require('./creds.js');
var mongoose = require('mongoose');
mongoose.connect(creds.mdburi, function(err, result) {
    if (err) throw err;
    else{
      console.log('Successfully connected to MongoDB');
    } 
});

var db = mongoose.connection;
var Schema = mongoose.Schema;

 
var PlayerSchema = new Schema({
	username   : { type: String, required: true, unique: true },
	email      : { type: String, required: true, unique: true },
	password   : { type: String, required: true },
	keybinds   : [],
 	offset     : Number
})

var ScoresSchema = new Schema({
	username   : String,
	songId     : Number,
	points     : Number,
	difficulty : String,
	hits       : []
})

module.exports.Player = mongoose.model('Player', PlayerSchema);
module.exports.Score = mongoose.model('Score', ScoresSchema);
