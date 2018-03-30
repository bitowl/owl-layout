(function () {
    'use strict';
    
    const lowerthirdVisibleRepl = nodecg.Replicant('lowerthird-visible');

    const questionBoxSelectedMessageRepl = nodecg.Replicant('selected-question', 'owl-question-box');
    const questionBoxEnabledRepl = nodecg.Replicant('enabled', 'owl-question-box');

    class OwlLowerthird extends Polymer.Element {
        static get is() {
            return 'owl-lowerthird';
        }
        
        ready() {
            super.ready();
            lowerthirdVisibleRepl.on('change', value => {
                this.updateButtonDisabled();
                this.$.title.disabled = value;
                this.$.text.disabled = value;
            });

            questionBoxSelectedMessageRepl.on('change', value => {
                this.updateButtonDisabled();
            });
        }

        updateButtonDisabled() {
            this.$.show.disabled = lowerthirdVisibleRepl.value || questionBoxSelectedMessageRepl.value !== null;
            this.$.hide.disabled = !lowerthirdVisibleRepl.value;
        }

        show() {
            questionBoxEnabledRepl.value = false;
            lowerthirdVisibleRepl.value = true;
        }

        hide() {
            questionBoxEnabledRepl.value = true;
            lowerthirdVisibleRepl.value = false;
        }
    }
    customElements.define(OwlLowerthird.is, OwlLowerthird);
})();
