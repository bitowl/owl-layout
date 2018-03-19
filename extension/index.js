'use strict';

const timerExtension = require('./timer');
const twitchBot = require('./twitchbot');

module.exports = function (nodecg) {
    timerExtension(nodecg);
    twitchBot(nodecg);
};
