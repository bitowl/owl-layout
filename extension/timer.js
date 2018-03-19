'use strict';

module.exports = function (nodecg) {
    const ldTimer = nodecg.Replicant('ld-timer', {defaultValue:{
        text: "--:--:--"
    }, persistent: false});

    var timerInterval = setInterval(() => {
        tick();
    }, 100);

    var startDate = new Date(2018, 2, 15, 18, 52, 12);
    var endDate = new Date(2018, 3, 20, 3, 0, 0);

    function tick() {
        var t = endDate - new Date();
        if (t < 0) {
            ldTimer.value.text = "\\ö/";
            return;
        }
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) );

        ldTimer.value.text = doubleDigit(hours) + ":" + doubleDigit(minutes) + ":" + doubleDigit(seconds);
    }

    function doubleDigit(digit) {
        if (digit < 10) {
            return "0" + digit;
        }
        return digit;
    }
};
