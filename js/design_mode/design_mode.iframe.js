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
        this.article_size  = this.article.getComputedSize();
        this.original_html = this.article.get('html');

        // Create iframe object
        this.iframe = new Element('iframe', { id : 'dm-iframe'});

        // Resize iframe
        this.resize(this.article_size.totalWidth, this.article_size.totalHeight + 70) // 70 is a hack!
        this.article.set('html', '');
        this.iframe.inject(this.article);

        html = '<!DOCTYPE html>'
        html += '<head><meta charset="utf-8" /><link rel="stylesheet" href="css/tanraya/default.css" />'
        html += '<link rel="stylesheet" href="css/layout_sample/content.css" /></head>'
        html += '<html class="content"><body>' + this.original_html + '</body>'
        html += '</html>'

        this.win = this.iframe.contentWindow;
        this.doc = this.iframe.contentDocument;
        this.doc.open();
        this.doc.write(html);
        this.doc.close();
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