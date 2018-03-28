(function () {
    'use strict';

    const selectedMessage = nodecg.Replicant('selected-question', 'owl-question-box');

    class OwlCurrentQuestion extends Polymer.Element {
        static get is() {
            return 'owl-current-question';
        }
        ready() {
            super.ready();

            this.isMessageSet = false;

            selectedMessage.on('change', newVal => {
                this.isMessageSet = newVal === null ? false : true;
                this.message = newVal;
                if (newVal !== null) {
                    this.showMessage();
                }
            });

            nodecg.listenFor('hide-question', 'owl-question-box', (value) => {
                this.hideMessage();
            });

        }

        showMessage() {
            nodecg.playSound('show-question');
            var tl = new TimelineLite();
            tl.to(this.$.header, .5, {'clip-path': 'inset(0 0% 0 0)', ease: Power2.easeIn});
            tl.to(this.$.user, .3, {'clip-path': 'inset(0 0% 0 0)', ease: Power2.easeIn}, '0.3')
            tl.to(this.$.body, .4, {'clip-path': 'inset(0 0% 0 0)', ease: Power2.easeIn}, '-=0.4');
            tl.to(this.$.text, .5, {'opacity': 1}, '-=0.2');
        }


        hideMessage() {
            nodecg.playSound('hide-question');
            var tl = new TimelineLite();
            tl.to(this.$.body, .5, {'clip-path': 'inset(0 0 0 100%)', ease: Power1.easeIn});
            tl.to(this.$.header, .5, {'clip-path': 'inset(0 0 0 100%)', ease: Power2.easeIn}, '-=0.4');
    
            // reset
            tl.to(this.$.user, 0, {'clip-path': 'inset(0 100% 0 0%)'});
            tl.to(this.$.body, 0, {'clip-path': 'inset(0 100% 0 0%)'});
            tl.to(this.$.header, 0, {'clip-path': 'inset(0 100% 0 0%)'});
            tl.to(this.$.text, 0, {'opacity': 0});
        }

    }
    customElements.define(OwlCurrentQuestion.is, OwlCurrentQuestion);
})();