(function () {
    'use strict';
    const breakScreenText = nodecg.Replicant('breakscreen', {defaultValue: {
        text: '',
        visible: false
    }, persistent: true});

    const breakScreenPresets = nodecg.Replicant('breakscreen-presets', {
        defaultValue: []
    , persistent: true});

    class OwlBreakscreen extends Polymer.MutableData(Polymer.Element) {
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

            breakScreenPresets.on('change', newVal => {
                console.log(newVal);
                this.presets = newVal;
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

        addPreset() {
            console.log('Add preset');
            breakScreenPresets.value.push(this.$.breakScreenText.value);
        }

        usePreset(event) {
            this.$.breakScreenText.value = event.model.item;
        }

        deletePreset(event) {
            breakScreenPresets.value.splice(breakScreenPresets.value.indexOf(event.model.item), 1);
        }
    }
    customElements.define(OwlBreakscreen.is, OwlBreakscreen);
})();