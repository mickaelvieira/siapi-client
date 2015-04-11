
var logger  = require('../modules/logger.js');

var home = function (req, res) {

    logger.info('Home route!!!');

    res.render('index', {
        message: 'Hello world!!!'
    });
};


module.exports = home;