(function () {
    'use strict';
    
    const ldTimer = nodecg.Replicant('ld-timer');

    class OwlTimer extends Polymer.Element {
        static get is() {
            return 'owl-timer';
        }

        
        ready() {
            super.ready();

            ldTimer.on('change', newVal => {
                this.timeText = newVal.text;
            });
        }
    }
    customElements.define(OwlTimer.is, OwlTimer);
})();