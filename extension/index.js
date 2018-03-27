'use strict';

//const questionBox = require('./questionbox');

module.exports = function (nodecg) {
    //questionBox(nodecg);
    const barContentsRepl = Replicant('bar-contents', {
        defaultValue: [],
        persistent: true
    });

    /*

    {
        type: 'text',
        options: {
            duration: 10000,
            text: 'asdfasdfasd'
        }
    }

};
