(function () {
    'use strict';

    class OwlSkewed extends Polymer.Element {
        static get is() {
            return 'owl-skewed';
        }

        static get properties() {
            return {
                noBox: Boolean,
                startInvisible: Boolean,
                boxColor: String,
                darkBackground: Boolean,
            };
        }

        
        ready() {
            super.ready();
            console.log(this.boxColor);

            if (this.boxColor !== undefined) {
                this.$.box.style.background = this.boxColor;
            }
        }

        getClass() {
            var res = 'skewed';
            if (this.noBox) {
                res += ' no-box';
            }
            if (this.startInvisible) {
                res += ' start-invisible';
            }
            if (this.darkBackground) {
                res += ' dark-background';
            }
            return res;
        }

        show() {
            var tl = new TimelineLite();
            tl.to(this.$.box, 0, { 'clip-path': 'inset(0 100% 0 0)', 'width': '100%' });
            tl.to(this.$.bg, 0, { 'clip-path': 'inset(0 100% 0 0)' });
            tl.to(this.$.inner, 0, { 'clip-path': 'inset(0 100% 0 0)', 'x': '-20px' });
            var all = this.$.all;
            tl.add(function() {
                // TODO: fade in to width?
                all.style.display = 'inline-block';
            });
    
            // tl.to(this.$.inner, 0, { 'margin-left': '0px' });
            tl.to(this.$.box, .8, { 'clip-path': 'inset(0 0% 0 0)', ease: Power2.easeOut });
            tl.to(this.$.bg, .8, { 'clip-path': 'inset(0 0% 0 0)', ease: Power2.easeOut }, '-=.6');
            tl.to(this.$.inner, .5, { 'clip-path': 'inset(0 0% 0 0)', 'x': '0px' }, '-=0.6');
            tl.to(this.$.box, .5, { 'width': '15px', ease: Power2.easeOut }, '-=0.5');
            // tl.to(this.$.inner, .4, { 'margin-left': '20px', ease: Power2.easeOut }, '-=0.7;
            return tl;
        }

        hide() {
            var tl = new TimelineLite();
            tl.to(this.$.bg, 0, { 'clip-path': 'inset(0 0 0 0%)' });
            tl.to(this.$.inner, 0, { 'clip-path': 'inset(0 0 0 0%)' });
            tl.to(this.$.box, 0, { 'clip-path': 'inset(0 0 0 0%)' });
    
            tl.to(this.$.bg, .5, { 'clip-path': 'inset(0 0 0 100%)', ease: Power2.easeIn });
            tl.to(this.$.inner, .4, { 'clip-path': 'inset(0 0 0 100%)', ease: Power2.easeIn }, '-=0.5');
            tl.to(this.$.box, .2, { 'clip-path': 'inset(0 0 0 100%)', ease: Power2.easeIn }, '-=0.2');
            var all = this.$.all;
            tl.add(function() {
                // TODO: fade out to zero width?
                all.style.display = 'none';
            });
            return tl;
        }
    }
    customElements.define(OwlSkewed.is, OwlSkewed);
})();