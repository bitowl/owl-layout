(function () {
    'use strict';

    class OwlFollowMeItem extends Polymer.Element {
        static get is() {
            return 'owl-follow-me-item';
        }

        static get properties() {
            return {
                text: String,
                icon: String,
                color: String,
            };
        }


        show() {
            return this.$.content.show();
        }
        hide() {
            return this.$.content.hide();
        }
    }
    customElements.define(OwlFollowMeItem.is, OwlFollowMeItem);
})();