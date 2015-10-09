var express = require('express');
var path = require('path');
var request = require('request');

var app = express();
app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/public/index.html');
});

// Proxy for the HauteLook events API
//
// This function should work "as is" and should not need to be changed. If you
// are having an issue where this function is not working, please reach out.
app.get('/events', function(req, res) {

    var query = req.query.query;

    request = request.defaults({jar: false});
    request({
        url: "https://www.hautelook.com/v4/events",
        headers: {
            Authorization: "HWS a5a4d56c84b8d8cd0e0a0920edb8994c",
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Content-Type": "vnd.com.hautelook.web+json;ver=4"
        }
    },
    function(err, response, body){
	res.end(body);
    });
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Express server started on http://localhost:' + server.address().port);
});
