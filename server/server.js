'use strict';

var express    = require('express');      
var app        = express();            
var bodyParser = require('body-parser');
var React = require('react');
var port = process.env.PORT || 4000;  


//serving static files
app.configure(function () {
    app.use("/", express.static(__dirname + '/../client/'));
});


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.listen(port);
console.log('Server Running on ' + port);