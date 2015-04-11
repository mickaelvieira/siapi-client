
var http    = require('http');
var logger  = require('../modules/logger.js');
var qString = require('querystring');

var search = function (req, res) {

    logger.info('Search route!!!');

    var queryString = qString.stringify({
        'q' : req.query.q
    });

    var options = {
        hostname: 'siapi.dev',
        post: 80,
        path: '/search?' + queryString,
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.collection+json'
        }
    };

    var request = http.request(options, function (response) {

        logger.info('Status: ' + response.statusCode);
        logger.info('Headers: ' + JSON.stringify(response.headers));

        response.setEncoding('utf8');
        response.on('data', function (body) {
            res.send(body);
        });
    });

    request.on('error', function(e) {
        logger.warn('Problem with request: ' + e.message);
    });

    request.end();
};

module.exports = search;