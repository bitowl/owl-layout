(function () {
    'use strict';

    class OwlFollowAlert extends Polymer.Element {
        static get is() {
            return 'owl-follow-alert';
        }

        ready() {
            super.ready();
            this.username = 'thisisatestusername';

            this.isVisible = false;

            this.queue = [];
            this.isAnimating = false;

            nodecg.listenFor('new-follow', 'owl-twitch-alert', value => {
                this.queue.push(value);
                if (!this.isAnimating) {
                    this.showNextFollow();
                }
            });
        }

        showNextFollow() {
            this.isAnimating = true;

            this.username = this.queue.shift();
            this.show().call(() => {
                setTimeout(() => {
                    this.hide().call(() => {
                        if (this.queue.length > 0) {
                            this.showNextFollow();
                            return;
                        }

                        this.isAnimating = false;
                    });
                }, nodecg.bundleConfig.followDisplayTime);
            });
        }

        show() {
            nodecg.playSound('follow-alert');
            return this.$.followalert.show();
			/*            Const tl = new TimelineLite();
                        tl.to(this.$.followalert, .5, { top: "16px", ease: Elastic.easeOut.config(.5, 0.5)});
                        return tl; */
        }

        hide() {
            nodecg.playSound('hide-follow-alert');
			/*const tl = new TimelineLite();
			tl.to(this.$.followalert, 0.5, {top: '-500px', ease: Back.easeIn.config(1.5)});
            return tl;*/
            return this.$.followalert.hide();
        }
    }
    customElements.define(OwlFollowAlert.is, OwlFollowAlert);
})();
