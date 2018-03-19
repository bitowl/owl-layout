(function () {
    'use strict';
    const breakScreenText = nodecg.Replicant('breakscreen', {defaultValue: {
        text: "",
        visible: false
    }, persistent: true});

    class OwlBreakscreen extends Polymer.Element {
        static get is() {
            return 'owl-breakscreen';
        }

        ready() {
            super.ready();
            breakScreenText.on('change', newVal => {
                this.$.breakScreenText.value = newVal.text;
                this.$.show.disabled = newVal.visible;
                this.$.hide.disabled = !newVal.visible;
            });
        }

        updateBreakScreenText() {
            breakScreenText.value.text = this.$.breakScreenText.value;
            console.log(breakScreenText.value);
        }

        showBreakScreen() {
            this.updateBreakScreenText();
            breakScreenText.value.visible = true;
        }

        hideBreakScreen() {
            breakScreenText.value.visible = false;
        }
    }
    customElements.define(OwlBreakscreen.is, OwlBreakscreen);
})();