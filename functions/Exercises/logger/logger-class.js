'use strict';

class Logger {
    constructor(level) {
        this.color = Logger.colors[level] || Logger.colors.info;
    }

    log(s) {
        const date = new Date().toISOString();
        console.log(this.color + date + '\t' + s);
    }

    static colors = {
        warning: '\x1b[1;33m',
        error:   '\x1b[0;31m',
        info:    '\x1b[1;35m',
    };
}


const warning = new Logger('warning');
const error   = new Logger('error');
const debug   = new Logger('debug');
const slow    = new Logger('slow');

slow.log('i am slow logger');
warning.log('WWAARRRNING!');
error.log('ERRORISSIMO!');
debug.log('DEBUGIEBUGIE');