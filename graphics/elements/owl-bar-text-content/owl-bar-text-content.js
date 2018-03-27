(function () {
    'use strict';

    class OwlBarTextContent extends Polymer.Element {
        static get is() {
            return 'owl-bar-text-content';
        }
        ready() {
            super.ready();
        }

        enter() {
            var tl = new TimelineLite();
            tl.to(this, 1, {'clip-path': 'inset(0 0% 0 0)', ease: Power2.easeIn});
         //   tl.to(this, 0, {x: 190}); // reset x
            //tl.to(this, .5, {x: 20, opacity: 1, ease: Back.easeOut})
            return tl;
        }
        exit() {
            var tl = new TimelineLite();
            tl.to(this, 1, {'clip-path': 'inset(0 100% 0 0)', ease: Power2.easeOut});
            //tl.to(this, 1, {opacity: 0});
            return tl;
        }

    }
    customElements.define(OwlBarTextContent.is, OwlBarTextContent);
})();