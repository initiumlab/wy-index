/*jslint node: true */

// Serve the files
var express = require('express');
var app = express();
var fs = require('fs');

// Monitor post requests from clients
app.use('/', express.static(__dirname));
var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.post('/', function (req, res) {
    'use strict';
    console.log(req.body.time);
    console.log(req.ip);
    console.log(req.body.userChoices);
    var line = '\n' + req.body.time.toString() + '|' + req.ip.toString() + '|' + JSON.stringify(req.body.userChoices);
    fs.appendFile('/home/andy/wy-data/data.csv', line, function (err) {console.log(err)});
});

app.listen(3000, function () {
    'use strict';
    console.log('listening');
});
