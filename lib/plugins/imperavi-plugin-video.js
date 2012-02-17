(function( $ ) {
  $.fn.DesignModePluginVideo = function(o) { this.initialize(o) }

  $.fn.DesignModePluginVideo.prototype = {
    initialize: function(o) {
      this.o = o
      
      this.dialog = new $.fn.DesignModeDialog({
        title  : 'Insert video',
        width  : 600,
        height : 300,
        onOkay : function() {
          alert(this.el.find('textarea').val())
          this.hide()
        }
      })

      this.dialog.show()
      this.dialog.el.addClass('design-mode-plugin-video')
      this.build()
    },

    build: function() {
      var textarea = $(document.createElement('textarea'))
      this.dialog.setContent(textarea)
    }
  }
})(jQuery);