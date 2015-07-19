var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.post('/', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    // ...
});
app.listen(9999, function() { console.log('listening')});
//Test
