"use strict";

function ConsoleHook(options) {
    this.config = options.config;
    this.serverInfo = options.serverInfo;

    this.send = (data) => {
        console.log(data);
    }
}

module.exports = (options) => new ConsoleHook(options);
