// Iframe object
DesignMode.Iframe = new Class({
    // Constructor
    initialize: function(el) {
        this.create(el)
    },

    // Create iframe object and inject it after el
    create: function(el) {
        // Move html from el to new div and hide
        this.article = el;

        var text = this.article.get('html');
        var size = this.article.getComputedSize();
        this.article.set('html', '')

        this.original = new Element('div', { styles : { display : 'none' } }).inject(this.article);
        this.original.set('html', text);

        this.iframe = new Element('iframe', {
            id : 'dm-iframe'
        }).inject(this.original, 'after');

        html = '<!DOCTYPE html>'
        html += '<head><meta charset="utf-8" /><link rel="stylesheet" href="css/tanraya/default.css" /><link rel="stylesheet" href="css/layout_sample/content.css" /></head>'
        html += '<html class="content"><body>' + this.original.get('html') + '</body>'
        html += '</html>'

        this.win = this.iframe.contentWindow;
        this.doc = this.iframe.contentDocument;
        this.doc.open();
        this.doc.write(html);
        this.doc.close();

        // Resize iframe
        this.resize(size.totalWidth, size.totalHeight + 70) // 70 is a hack!
    },

    // Resize iframe
    resize: function(width, height) {
        this.iframe.setStyles({
            'width'  : width,
            'height' : height
        })
    },

    // Makes iframe editable
    editable: function(status) {
        this.doc.designMode = status ? 'on' : 'off';
    }
});