'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://tidal:tidal@ds047355.mongolab.com:47355/tidal', function(err, result) {
    if (err) return err;
    console.log('Successfully connected to MongoDB')
});

var db = mongoose.connection;
var Schema = mongoose.Schema;

 
var PlayerSchema = new Schema({
	username   : { type: String, required: true, unique: true },
	email      : { type: String, required: true, unique: true },
	password   : { type: String, required: true },
	age 	   : Number,
	created_at : Date,
    updated_at : Date, 
    avatar	   : String
})



// PlayerSchema.pre('save', function(next) {
//     var user = this;
//     next();
// });

module.exports = mongoose.model('Player', PlayerSchema);