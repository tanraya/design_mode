(function( $ ) {
  $.fn.DesignModePluginHyperlink = function(o) { this.initialize(o) }

  $.fn.DesignModePluginHyperlink.prototype = {
    initialize: function(o) {
      this.o = o
      
      this.dialog = new $.fn.DesignModeDialog({
        title    : 'Insert hyperlink',
        width    : 450,
        height   : 237,
        onRemove : function() {
          alert('fuck yeah!')
          this.hide()
        },
        onOkay : function() {
          alert('fuck')
          this.hide()
        }
      })

      this.dialog.show()
      this.dialog.el.addClass('design-mode-plugin-hyperlink')
      this.dialog.addButton('Remove', 'remove')
      this.build()
    },

    build: function() {
      var wrapper = $(document.createElement('div'))
      var url     = this.build_input('Url', 'url').appendTo(wrapper)
      var caption = this.build_input('Title', 'title').appendTo(wrapper)

      this.dialog.setContent(wrapper)
    },

    build_input: function(title, name) {
      var wrapper = $(document.createElement('div'))
        .addClass('field')

      var label = $(document.createElement('label'))
        .attr('for', name)
        .html(title)
        .appendTo(wrapper)

      var url = $(document.createElement('input'))
        .attr('type', 'text')
        .attr('name', name)
        .attr('id', name)
        .appendTo(wrapper)

      return wrapper
    }
  }
})(jQuery);