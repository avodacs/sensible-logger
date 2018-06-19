# sensible-logger

A simple logging module extending winston.

## Installing

Using npm:

`$ npm install sensible-logger`

## Log Levels

Log Levels follow the levels set in winston:

```
emerg: 0,
alert: 1,
crit: 2,
error: 3,
warning: 4,
notice: 5,
info: 6,
debug: 7
```

To set the minimum log level, set `LOG_LEVEL=info`, where `info` is the level above.

## Colorization

To disable colorization, set `LOG_COLORIZATION=false`.

## Examples

```
const logger = require('sensible-logger');

logger.debug('In case you wanted to know...');
logger.info('Everything is OK!');
logger.warn('Be careful!');
logger.error('Sound the alarm!');
```
