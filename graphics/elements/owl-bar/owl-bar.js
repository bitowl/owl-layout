(function () {
    'use strict';
    
    const barReplicant = nodecg.Replicant('bar', {defaultValue: {
        timerVisible: false,
        logoVisible: false
    }, persistent: true});

    const barContentsRepl = nodecg.Replicant('bar-contents');

    class OwlBar extends Polymer.Element {
        static get is() {
            return 'owl-bar';
        }

        ready() {
            super.ready();

            barReplicant.on('change', newVal => {

                this.$.timer.style.display = newVal.timerVisible ? 'block' : 'none';
                this.$.eventLogo.style.display = newVal.logoVisible ? 'block' : 'none'
                this.eventLogo = newVal.eventLogo;
            });

            barContentsRepl.on('change', newVal => {
                // TODO:
                // - stop the running process loop?
                // - replace contents of innerBar
                // - restart processNextPart
            });
            
            this.run();
        }

		run() {
            const self = this;
			// For development, comment out whichever parts you don't want to see right now.
			const parts = [
                this.showSimpleText,
                this.stay,
                this.hideSimpleText
                /*this.showCurrentlyPlaying,
                this.stay,
                this.stay,
                this.hideCurrentlyPlaying,
                this.showFollowMe,
                this.stay,
                this.hideFollowMe*/
			];

			function processNextPart() {
				if (parts.length > 0) {
					const part = parts.shift().bind(self);
					promisifyTimeline(part())
						.then(processNextPart)
						.catch(error => {
							nodecg.log.error('Error when running main loop:', error);
						});
				} else {
					self.run();
				}
			}

			function promisifyTimeline(tl) {
				return new Promise(resolve => {
					tl.call(resolve, null, null, '+=0.03');
				});
			}

			processNextPart();
		}

        stay () {
            const tl = new TimelineLite();
            tl.to({}, 10, {}); // TODO: make configurable
            return tl;
        }

        showCurrentlyPlaying() {
            return this.$.currentlyPlaying.enter();
        }

        hideCurrentlyPlaying() {
            return this.$.currentlyPlaying.exit();
        }

        showFollowMe() {
            return this.$.followMe.enter();
        }

        hideFollowMe() {
            return this.$.followMe.exit();
        }

        showSimpleText() {
            return this.$.simpleText.enter();
        }
        hideSimpleText() {
            return this.$.simpleText.exit();
        }

    }
    customElements.define(OwlBar.is, OwlBar);
})();