(function () {
    'use strict';
    
    class OwlFollowMe extends Polymer.Element {
        static get is() {
            return 'owl-follow-me';
        }


        enter() {
            const items = [
                this.$.followMeTwitter,
                this.$.followMeFacebook,
                this.$.followMeYouTube,
                this.$.followMeGitHub
            ];

            const tl = new TimelineLite();
            items.forEach((item) => {
                tl.to(item, 0, {opacity: 0, y: -20});
            });
            tl.to(this, .5, {opacity: 1});
            items.forEach((item) => {
                tl.to(item, 0.3, {opacity:1, y: 0, ease: Back.easeOut.config(3)});
            });
            return tl;
        }


        exit() {
            const tl = new TimelineLite();
            tl.to(this, .5, {opacity: 0});
            return tl;
        }
    }
    customElements.define(OwlFollowMe.is, OwlFollowMe);
})();