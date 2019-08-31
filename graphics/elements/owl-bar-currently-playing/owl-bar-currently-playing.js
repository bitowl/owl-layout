(function () {
    'use strict';

    const mpcReplicant = nodecg.Replicant('mpc', 'owl-mpc');

    class OwlCurrentlyPlaying extends Polymer.Element {
        static get is() {
            return 'owl-bar-currently-playing';
        }
        ready() {
            super.ready();
            mpcReplicant.on("change", newVal => {
                this.artist = newVal.artist;
                this.title = newVal.title;
            });
        }

        enter() {
            return this.$.skewed.show();
            /*var tl = new TimelineLite();
            tl.to(this, 0, {x: 190}); // reset x
            tl.to(this, .5, {x: 20, opacity: 1, ease: Back.easeOut})
            return tl;*/
        }
        exit() {
            return this.$.skewed.hide();
            /*var tl = new TimelineLite();
            tl.to(this, 1, {opacity: 0});
            return tl;*/
        }

    }
    customElements.define(OwlCurrentlyPlaying.is, OwlCurrentlyPlaying);
})();