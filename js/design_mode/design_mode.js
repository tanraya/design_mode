// Editor general class
var DesignMode = new Class({
    Implements : [Events, Options],

    // Constructor
    initialize: function(area, options) {
        this.setOptions(options);
        this.area = $(area);
    },

    enable: function() {
        // Creates iframe
        this.editor = new DesignMode.Editor(this.area);
        this.editor.editable(true);

        // Initialize dock
        this.dock = new DesignMode.Dock({
            default_pos : { x : 810, y : 170 }
        });
    },

    disable: function() {
        // temporary code - I know it's ugly
        this.editor.article.set('html', this.editor.original.get('html'));
        this.editor.original.dispose();
        this.editor.iframe.dispose();
        this.dock.dock.setStyle('display', 'none');

        this.dock   = null;
        this.editor = null;
    }
});