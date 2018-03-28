(function () {
    'use strict';
    const barContentsRepl = nodecg.Replicant('bar-contents');

    class OwlAddBarContent extends Polymer.Element {
        static get is() {
            return 'owl-add-bar-content';
        }

        ready() {
            super.ready();
            this.types = [
                'text-content',
                'currently-playing',
                'follow-me'
            ];
            nodecg.listenFor('bar-content-add', value => {
                barContentsRepl.value.push({
                    type: this.types[this.$.type.selected],
                    options: value
                });
            });
        }

        addContent() {
            var doc = nodecg.getDialogDocument('bar-content-add');
            var placeholder = doc.getElementById('placeholder');
            while (placeholder.firstChild) { // empty placeholder
                placeholder.removeChild(placeholder.firstChild);
            }
            var element = doc.createElement('owl-bar-' + this.types[this.$.type.selected]);
            element.id = 'content';
            element.options = {
                duration: nodecg.bundleConfig.defaultBarContentTime
            };
            element.message = 'bar-content-add';
            placeholder.appendChild(element);
            nodecg.getDialog('bar-content-add').open();
        }
    }
    customElements.define(OwlAddBarContent.is, OwlAddBarContent);
})();