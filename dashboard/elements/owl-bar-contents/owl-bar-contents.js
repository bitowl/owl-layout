(function () {
    'use strict';
    
    class OwlBarContents extends Polymer.MutableData(Polymer.Element) {
        static get is() {
            return 'owl-bar-contents';
        }

        ready() {
            super.ready();
            
        }

    }
    customElements.define(OwlBarContents.is, OwlBarContents);
})();