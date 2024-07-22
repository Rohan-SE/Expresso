const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');


const logDirectory = path.join(__dirname, './logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(logDirectory, 'app.log') })
    ]
});

logger.stream = {
    write: function(message) {
        logger.info(message.trim());
    }
};


const morganMiddleware = morgan('combined', { stream: logger.stream });

module.exports = { logger, morganMiddleware };
