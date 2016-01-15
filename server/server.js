'use strict';

var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var React      = require('react');
var port       = process.env.PORT || 4000;  


app.use(express.static(__dirname + '/../'));

app.listen(port);
console.log('Server Running on ' + port);