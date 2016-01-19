'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://tidal:tidal@ds047355.mongolab.com:47355/tidal');

var db = mongoose.connection;
var Schema = mongoose.Schema;

 
var PlayerSchema = new Schema({
    username  : String,
    password  : String,
    email     : Email,
});

module.exports = mongoose.model('Player', PlayerSchema);


