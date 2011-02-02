// Dock panel with instruments
DesignMode.Dock = new Class({
    Implements : [Options],
    options    : {
        dock        : $('dm-dock'),
        handle      : $$('#dm-dock h4')[0],
        default_pos : { x : 0, y : 0 }
    },

    // Constructor
    initialize: function(options) {
        this.setOptions(options);
        this.dock = $(this.options.dock);

        // it's temporary
        this.dock.setStyle('display', 'block');

        // Set default position
        this.dock.position({
            position   : 'centerRight',
            edge       : { x : 500,  y : 700 },
            offset     : { x : -100, y : 0 }
        });

        // Set custom position
        var p = this.options.default_pos;
        if (p.y && p.x) {
            this.dock.setStyles({
                top  : p.y + 'px',
                left : p.x + 'px'
            });
        }

        // Pin dock to viewport
        this.dock.pin();

        // Enable grag
        var drag = new Drag(this.dock, {
            handle : this.options.handle,
            snap   : 0
        });
    }
});