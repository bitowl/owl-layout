(function () {
    'use strict';
    
    class OwlFollowMeItem extends Polymer.Element {
        static get is() {
            return 'owl-follow-me-item';
        }

        static get properties() {
            return {
                text: String,
                icon: String
            };
        }


    }
    customElements.define(OwlFollowMeItem.is, OwlFollowMeItem);
})();