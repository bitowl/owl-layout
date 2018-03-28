(function () {
    'use strict';

    const boxMessages = nodecg.Replicant('messages', 'owl-question-box');

    class OwlPreloadQuestionImages extends Polymer.MutableData(Polymer.Element) {
        static get is() {
            return 'owl-preload-question-images';
        }
        ready() {
            super.ready();
            boxMessages.on('change', value => {
                console.log(value);
                this.questions = value;
            });
        }
    }
    customElements.define(OwlPreloadQuestionImages.is, OwlPreloadQuestionImages);
})();