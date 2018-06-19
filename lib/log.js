const winston = require('winston');
const moment = require('moment');

function getLogger() {
  const transports = [];

  let colorize = process.env.LOG_COLORIZATION || true;

  // Add console output IF we're not in test mode
  if (process.env.NODE_ENV !== 'test') {
    transports.push(
      new (winston.transports.Console)({
        timestamp /* istanbul ignore next */ () {
          return moment().format('YYYY-MM-DD HH:mm:ss.SSSS');
        },
        colorize
      })
    );
  };

  let logLevel = process.env.LOG_LEVEL || 'debug';

  // Build the logger
  logger = new (winston.Logger)({
    level: logLevel,
    handleExceptions: false,
    transports: transports
  });

  // Added for streaming, such as with with morgan
  logger.stream = {
    write: function (message, encoding) {
      logger.info(message.trim());
    }
  };

  return logger;
}

// Set the logger as the only export from this, which makes it directly
// accessible from the require.
module.exports = getLogger();
