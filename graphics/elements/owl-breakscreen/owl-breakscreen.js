(function () {
    'use strict';
    const breakScreenReplicant = nodecg.Replicant('breakscreen');

    class OwlBreakscreen extends Polymer.Element {
        static get is() {
            return 'owl-breakscreen';
        }

        ready() {
            super.ready();
            this.breakScreenText = "";
            this.breakScreenVisible = "firsttime";
            breakScreenReplicant.on('change', newVal => {
                this.breakScreenText = newVal.text
                newVal.visible == true ? this.showBreakScreen() : this.hideBreakScreen();
            });
        }

        showBreakScreen() {
            if (this.breakScreenVisible == "yeah") {
                return;
            }

            nodecg.playSound('show-breakscreen');
            this.breakScreenVisible = "yeah";
            const tl = new TimelineLite();
            tl.to(this, 1, {y:0, ease: Power2.easeOut})
        }

        hideBreakScreen() {
            if (this.breakScreenVisible == "nay") {
                return;
            }

            if (this.breakScreenVisible == "firsttime") {
                // Don't play the animation on the first time
                const tl = new TimelineLite();
                tl.to(this, 0, {y: -1080})    
                return;
            }

            nodecg.playSound('hide-breakscreen');

            this.breakScreenVisible = "nay";
            const tl = new TimelineLite();
            tl.to(this, 1, {y:-1080, ease: Power2.easeIn})
        }
    }
    customElements.define(OwlBreakscreen.is, OwlBreakscreen);
})();