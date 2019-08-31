(function () {
    'use strict';
    
    class OwlBarFollowMe extends Polymer.Element {
        static get is() {
            return 'owl-bar-follow-me';
        }


        enter() {
            const items = [
                this.$.followMeTwitter,
                this.$.followMeYouTube,
                this.$.followMeGitHub,
                this.$.followMeFacebook,
            ];

            const tl = new TimelineLite();
            tl.add(this.$.label.show());
            items.forEach((item) => {
                console.log(item);
                tl.add(item.show(), '-=0.65');
                // tl.to(item, 0, {opacity: 0, y: -20});
            });
            return tl;
        }


        exit() {
            const items = [
                this.$.followMeTwitter,
                this.$.followMeYouTube,
                this.$.followMeGitHub,
                this.$.followMeFacebook,
            ];

            const tl = new TimelineLite();
            tl.add(this.$.label.hide());
            // tl.to(this, .5, {opacity: 0});
            items.forEach((item) => {
                console.log(item);
                tl.add(item.hide(), '0');
                // tl.to(item, 0, {opacity: 0, y: -20});
            });
            return tl;
        }
    }
    customElements.define(OwlBarFollowMe.is, OwlBarFollowMe);
})();