var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: __dirname + '/../logs/app.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;