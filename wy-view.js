/*jslint node: true */

// Serve the files
var express = require('express');
var app = express();
app.use('/', express.static(__dirname));

// Monitor post requests from clients
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
});

app.listen(3000, function () {
    'use strict';
    console.log('listening');
});
