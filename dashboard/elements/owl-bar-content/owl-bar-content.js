(function () {
    'use strict';

    class OwlBarContent extends Polymer.Element {
        static get is() {
            return 'owl-bar-content';
        }

        static get properties() {
            return {
                duration: {
                    type: Number,
                    notify: true
                } 
            }
        }

        ready() {
            super.ready();
        }

    }
    customElements.define(OwlBarContent.is, OwlBarContent);
})();