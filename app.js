var express = require('express');
var hbs     = require('hbs');
var http    = require('http');
var app     = express();

var querystring = require('querystring');

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
    res.render('index', {
        message: 'Hello world!!!'
    });
});

app.get('/search', function (req, res) {

    var options = {
        hostname: 'siapi.dev',
        post: 80,
        path: '/search',
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.collection+json'
        }
    };

    var postData = querystring.stringify({});
    var request = http.request(options, function (response) {

        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));

        response.setEncoding('utf8');

        response.on('data', function (body) {
            res.send(body);
        });

    });

    request.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    request.write(postData);
    request.end();
});

http.createServer(app).listen(3000, '127.0.0.1');