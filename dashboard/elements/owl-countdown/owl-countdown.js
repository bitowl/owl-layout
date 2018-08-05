(function () {
    'use strict';

    const barReplicant = nodecg.Replicant('bar', {defaultValue: {
        timerVisible: false,
        logoVisible: false
    }, persistent: true});

    const eventLogos = nodecg.Replicant('assets:eventLogos');


    class OwlCountdown extends Polymer.Element {
        static get is() {
            return 'owl-countdown';
        }

        ready() {
            super.ready();
            this.eventLogos = [];
            barReplicant.on('change', newVal => {
                this.$.timerVisible.active = newVal.timerVisible;
                this.$.logoVisible.active = newVal.logoVisible;
                this.eventLogo = newVal.eventLogo;
            });
            eventLogos.on('change', newVal => {
                this.eventLogos = newVal;
                for (var i in newVal) {
                    var eventLogo = newVal[i];
                }
            })
        }

        toggleTimerVisible() {
            barReplicant.value.timerVisible = !barReplicant.value.timerVisible;
        }

        toggleLogoVisible() {
            barReplicant.value.logoVisible = !barReplicant.value.logoVisible;
        }

        selectEventLogo(event) {
            barReplicant.value.eventLogo = event.target.name;
        }

    }
    customElements.define(OwlCountdown.is, OwlCountdown);
})();