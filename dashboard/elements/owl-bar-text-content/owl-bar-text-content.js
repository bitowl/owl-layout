(function () {
    'use strict';

    class OwlBarTextContent extends Polymer.Element {
        static get is() {
            return 'owl-bar-text-content';
        }

        static get properties() {
            return {
                options: Object
            }
        }

        ready() {
            super.ready();
        }

    }
    customElements.define(OwlBarTextContent.is, OwlBarTextContent);
})();