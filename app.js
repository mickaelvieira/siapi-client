var express = require('express');
var hbs     = require('hbs');
var app     = express();
var http    = require('http');

app.use("public", express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
    res.render('index', {
        message: 'Hello world!!!'
    });
});

app.get('/search', function (req, res) {


    console.log(req.params);

    res.send({});
});

http.createServer(app).listen(3000, '127.0.0.1');