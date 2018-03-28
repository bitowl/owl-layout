(function () {
    'use strict';

    class OwlBarFollowMe extends Polymer.Element {
        static get is() {
            return 'owl-bar-follow-me';
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
    customElements.define(OwlBarFollowMe.is, OwlBarFollowMe);
})();