'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://tidal:tidal@ds047355.mongolab.com:47355/tidal', function(err, result) {
    if (err) return err;
    console.log('Successfully connected to DB')
}););

var db = mongoose.connection;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

 
var PlayerSchema = new Schema({
	username   : { type: String, required: true, unique: true },
	email      : { type: String, required: true, unique: true },
	password   : { type: String, required: true },
	age 	   : Number,
	created_at : Date,
    updated_at : Date, 
    avatar	   : String
});

PlayerSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};



PlayerSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('Player', PlayerSchema);