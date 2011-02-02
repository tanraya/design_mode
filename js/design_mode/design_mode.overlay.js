DesignMode.Overlay = new Class({
    Implements : Options,

    options : {
       overlayId : 'dm-overlay',
       zIndex    : 8000,
       opacity   : 0.4
    },

    initialize: function(options) {
        this.setOptions(options);

        if (!$(this.options.overlayId)) {
            this.el = this.build();
            this.el.set('opacity', this.options.opacity);

            // Extend overlay object
            $extend(this.el, {
                visible : this.visible.bind(this),
                toggle  : this.toggle.bind(this),
                show    : this.show.bind(this),
                hide    : this.hide.bind(this)
            });
        }
    },

    // Get overlay object
    get: function() {
        return this.el;
    },

    // Build overlay object
    build: function() {
        return new Element('div', {
            id      : this.options.overlayId,
            styles : {
                'z-index' : this.options.zIndex
            }
        }).inject(document.body, 'top');
    },

    // Overlay is visible
    visible : function() {
        return this.el.getStyle('display') == 'block';
    },

    // Toggle overlay
    toggle: function() {
       this.visible() ? this.hide() : this.show();
    },

    // Show overlay
    show: function() {
        this.el.setStyle('display', 'block');
    },

    // Hide overlay
    hide: function() {
        this.el.setStyle('display', 'none');
    }
});