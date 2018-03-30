(function () {
    'use strict';

    const barContentsRepl = nodecg.Replicant('bar-contents');

    class OwlBarContents extends Polymer.MutableData(Polymer.Element) {
        static get is() {
            return 'owl-bar-contents';
        }

        ready() {
            super.ready();

            barContentsRepl.on('change', value => {
                this.contents = value;
            });

            nodecg.listenFor('bar-content-delete', () => {
                this.deleteContent();
            });

            nodecg.listenFor('bar-content-edit', value => {
                this.contentToEdit.options = value;
            });
        }

        _formatOptions(options) {
            return JSON.stringify(options); // TODO: create better representation?
        }

        editContent(event) {
            this.contentToEdit = event.model.item;
            var doc = nodecg.getDialogDocument('bar-content-add');
            var placeholder = doc.getElementById('placeholder');
            while (placeholder.firstChild) { // empty placeholder
                placeholder.removeChild(placeholder.firstChild);
            }
            var element = doc.createElement('owl-bar-' + this.contentToEdit.type);
            element.id = 'content';
            element.options = Object.assign({}, this.contentToEdit.options);
            element.message = 'bar-content-edit';
            placeholder.appendChild(element);
            nodecg.getDialog('bar-content-add').querySelector('iframe').iFrameResizer.resize();
            nodecg.getDialog('bar-content-add').open();
        }

        confirmDeleteContent(event) {
            this.contentToDelete = event.model.item;
            nodecg.getDialog('bar-content-delete').open();
        }

        deleteContent() {
            barContentsRepl.value.splice(barContentsRepl.value.indexOf(this.contentToDelete), 1);
        }

    }
    customElements.define(OwlBarContents.is, OwlBarContents);
})();
