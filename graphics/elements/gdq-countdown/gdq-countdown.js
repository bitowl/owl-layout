(function () {
	'use strict';

	const countdownRunning = nodecg.Replicant('countdownRunning', 'owl-countdown');
	const countdownTime = nodecg.Replicant('countdown', 'owl-countdown');

	/**
	 * @customElement
	 * @polymer
	 */
	class GdqCountdown extends Polymer.Element {
		static get is() {
			return 'gdq-countdown';
		}

		ready() {
			super.ready();

			countdownRunning.on('change', newVal => {
                if (newVal) {
                    this.$.countdown.style.display = 'flex';
                } else {
                    this.$.countdown.style.display = 'none';
                }
			});

			countdownTime.on('change', newVal => {
				this.$.countdownMinutesTens.innerText = Math.floor(newVal.minutes / 10);
				this.$.countdownMinutesOnes.innerText = newVal.minutes % 10;
				this.$.countdownSecondsTens.innerText = Math.floor(newVal.seconds / 10);
				this.$.countdownSecondsOnes.innerText = newVal.seconds % 10;

				if (newVal.raw <= 0) {
					this.$.countdown.classList.add('blink');
				} else {
					this.$.countdown.classList.remove('blink');
				}
			});

		}
	}

	customElements.define(GdqCountdown.is, GdqCountdown);
})();