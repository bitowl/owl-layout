(function () {
    'use strict';
    
    const lowerthirdVisibleRepl = nodecg.Replicant('lowerthird-visible');

    class OwlLowerthird extends Polymer.Element {
        static get is() {
            return 'owl-lowerthird';
        }
        
        ready() {
            super.ready();
            
            this.currentlyVisible = false;

            lowerthirdVisibleRepl.on('change', newValue => {
                console.log('values', newValue);
                if (newValue == true && this.currentlyVisible == false) {
                    this.show();
                    this.currentlyVisible = newValue;
                    return;
                }
                if (newValue == false && this.currentlyVisible == true) {
                    this.hide();
                    this.currentlyVisible = newValue;
                }
            });
        }

        show() {
            nodecg.playSound('show-lowerthird');
            var tl = new TimelineLite();
            tl.to(this.$.lowerthird, .7, {'clip-path': 'inset(0 0% 0 0)', ease: Sine.easeInOut});
            tl.to(this.$.header, .5, {'clip-path': 'inset(0 0 0 0%)', ease: Power2.easeOut}, '-=0.5');
            tl.to(this.$.text, .5, {'clip-path': 'inset(0 0% 0 0)'}, '-=0.2');
        }

        hide() {
            nodecg.playSound('hide-lowerthird');
            var tl = new TimelineLite();
            tl.to(this.$.lowerthird, .6, {'clip-path': 'inset(0 100% 0 0)', ease: Sine.easeInOut});
            tl.to(this.$.header, 0, {'clip-path': 'inset(0 0 0 100%)'});
            tl.to(this.$.text, 0, {'clip-path': 'inset(0 100% 0 0)'});
        }
    }
    customElements.define(OwlLowerthird.is, OwlLowerthird);
})();
