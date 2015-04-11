var express = require('express');

var hbs     = require('hbs');
var http    = require('http');
var logger  = require('./modules/logger.js');
var app     = express();

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', require('./routes/home.js'));
app.get('/search', require('./routes/search.js'));

app.use(require('morgan')('combined', {
    "stream": logger.stream
}));

http.createServer(app).listen(3000, '127.0.0.1');
