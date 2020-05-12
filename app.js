var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
/*********ROUTES***********/
var routes = require('./routes/web')
console.log(routes);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/api',routes);


app.listen(port);
console.log('Server started at ' + port);
