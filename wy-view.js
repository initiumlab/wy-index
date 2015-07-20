/*jslint node: true */

var express = require('express');
var app = express();
var app_post = express();
var fs = require('fs');
var http = require('http');

//Allow CORS
app_post.all('*', function (req, res, next) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Serve the files
app.use('/', express.static(__dirname));
var bodyParser = require('body-parser');
app.listen(80);

// Monitor post requests from clients
app_post.use(bodyParser.json());
app_post.post('/', function (req, res) {
    'use strict';
    console.log(req.body.time);
    console.log(req.ip);
    console.log(req.body.userChoices);
    var line = '\n' + req.body.time.toString() + '|' + req.ip.toString() + '|' + JSON.stringify(req.body.userChoices);
    fs.appendFile('/home/andy/wy-data/data.csv', line, function (err) {console.log(err)});
});
http.createServer(app_post).listen(3000);
