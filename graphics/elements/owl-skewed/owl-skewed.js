(function () {
    'use strict';

    class OwlSkewed extends Polymer.Element {
        static get is() {
            return 'owl-skewed';
        }

        static get properties() {
            return {
                noBox: Boolean,
                startInvisible: Boolean
            };
        }

        
        ready() {
            super.ready();
            console.log(this.noBox);
        }

        getClass() {
            var res = 'skewed';
            if (this.noBox) {
                res += ' no-box';
            }
            if (this.startInvisible) {
                res += ' start-invisible';
            } else {
                res += ' visible';
            }
            return res;
        }
    }
    customElements.define(OwlSkewed.is, OwlSkewed);
})();