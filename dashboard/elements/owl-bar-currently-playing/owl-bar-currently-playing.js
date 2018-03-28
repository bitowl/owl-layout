(function () {
    'use strict';

    class OwlBarCurrentlyPlaying extends Polymer.Element {
        static get is() {
            return 'owl-bar-currently-playing';
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
    customElements.define(OwlBarCurrentlyPlaying.is, OwlBarCurrentlyPlaying);
})();