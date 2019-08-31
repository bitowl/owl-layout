(function () {
	'use strict';

	const barReplicant = nodecg.Replicant('bar', {
		defaultValue: {
			timerVisible: false,
			logoVisible: false
		}, persistent: true
	});

	const barContentsRepl = nodecg.Replicant('bar-contents');

	class OwlBar extends Polymer.Element {
		static get is() {
			return 'owl-bar';
		}

		ready() {
			super.ready();
			this.isRunning = false;
			this.changeRequired = false;

			this.logoVisible = false;
			this.timerVisible = false;

			barReplicant.on('change', newVal => {
				console.log(newVal);
				// This.$.timer.style.display = newVal.timerVisible ? 'block' : 'none';
				// console.log('display: ' + this.$.eventLogo.style.display);
				if (newVal.timerVisible && !this.timerVisible) {
					this.$.timer.show();
					this.timerVisible = true;
				} else if (!newVal.timerVisible && this.timerVisible) {
					this.$.timer.hide();
					this.timerVisible = false;
				}

				if (newVal.logoVisible && !this.logoVisible) {
					this.$.eventLogo.show();
					this.logoVisible = true;
				} else if (!newVal.logoVisible && this.logoVisible) {
					this.$.eventLogo.hide();
					this.logoVisible = false;
				}

				// This.$.eventLogo.style.display = newVal.logoVisible ? 'block' : 'none'
				this.eventLogo = newVal.eventLogo;
			});

			barContentsRepl.on('change', newVal => {
				if (!this.isRunning) {
					this.changeBarContents();
					this.run();
					return;
				}

				this.changeRequired = true; // Change when everything is hidden
			});
		}

		changeBarContents() {
			const placeholder = this.$.innerBar;
			while (placeholder.firstChild) { // Empty placeholder
				placeholder.removeChild(placeholder.firstChild);
			}

			this.contents = [];

			barContentsRepl.value.forEach(content => {
				const element = document.createElement('owl-bar-' + content.type);
				element.options = content.options;
				placeholder.appendChild(element);
				this.contents.push(element);
			});
		}

		run() {
			this.isRunning = true;
			this.currentContent = -1;
			this.showNextContent();
		}

		showNextContent() {
			this.currentContent++;

			if (this.changeRequired) {
				this.changeBarContents();
			}

			if (this.currentContent >= this.contents.length) {
				if (this.currentContent == 0) { // There are no bar elements to be displayed
					this.isRunning = false;
					return;
				}

				this.run();// Restart
				return;
			}

			const content = this.contents[this.currentContent];
			content.enter().to({}, content.options.duration / 1000, {}).call(() => {
				content.exit().call(() => {
					this.showNextContent();
				});
			});
		}
	}
	customElements.define(OwlBar.is, OwlBar);
})();
