// Editor general class
DesignMode.Editor = new Class({
    Implements : [Events, Options],

    // Constructor
    initialize: function(area, options) {
        this.setOptions(options);
        this.area = $(area);

        // Creates iframe
        this.editor = new DesignMode.Iframe(this.area);
        this.editor.editable(true);
        //this.area.setStyle('display', 'none');

        // Initialize dock
        this.dock = new DesignMode.Dock({
            default_pos : { x : 810, y : 170 }
        });

//        this.editor.doc.addEvent('focus', function() {
//            alert('ok')
//        });
//        $('bold').addEvent('click', function() {
//            this.setBold();
//        }.bind(this))
    }//,
//
//    setBold: function() {
//        this.editor.contentWindow.focus();
//        this.editor.contentWindow.document.execCommand("bold", null, "");
//    }
});