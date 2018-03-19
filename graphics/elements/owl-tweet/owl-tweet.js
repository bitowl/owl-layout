(function () {
    'use strict';
    
    class OwlTweet extends Polymer.Element {
        static get is() {
            return 'owl-tweet';
        }

        ready() {
            self.user = "bitowl";
            self.tweet = "Hey, this is a test tweet #ldbitowl"
        }

    }
    customElements.define(OwlTweet.is, OwlTweet);
})();