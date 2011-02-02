// Iframe object
DesignMode.Editor = new Class({
    // Constructor
    initialize: function(el) {
        this.create(el)
    },

    create: function(el) {
        // Move html from el to new div and hide
        this.article = el;
    },

    // Makes iframe editable
    editable: function(status) {
        this.article.set('contentEditable', 'true');
    }
});