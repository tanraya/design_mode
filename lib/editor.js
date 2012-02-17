(function( $ ) {
  $.fn.designMode = function(o) {
    // Editor options
    var o = $.extend({
      locale    : 'ru', // TODO replace with $.fn.DesignModeLanguage
      resizer   : $.fn.DesignModeIframeResizer,
      dialog    : $.fn.DesignModeDialog,
      overlay   : $.fn.DesignModeOverlay,
      iframe    : $.fn.DesignModeIframe,
      toolbar   : $.fn.DesignModeToolbar,
      delegator : $.fn.DesignModeActionDelegator,
      options : {
        dialog : {
          title  : 'Default title',
          width  : 500,
          height : 300
        }
      }
    }, o)

    // Global options
    $.fn.DesignModeOptions = function() { return o }

    // Main object
    $.fn.DesignMode = function(el) { this.initialize(el) }

    $.fn.DesignMode.prototype = {
      textarea  : null,
      iframe    : null,
      toolbar   : null,
      resizer   : null,
      delegator : null,

      // Initialize design-mode
      initialize: function(el) {
        this.textarea = $(el)
        this.build()
        this.autosave()
      },

      build: function() {
         // Delegate action to another object
         this.delegator = new o.delegator

         // Create iframe
         this.iframe  = new o.iframe(this.textarea, o)

         // Create editor resizer
         this.resizer = new o.resizer(this.iframe, o)

         // Create toolbar
         this.toolbar = new o.toolbar(this.iframe, {
           onButtonClick : $.proxy(function(button) {
              this.delegator.delegateButtonClick(button, this.iframe)
           }, this)
         })
      },

      autosave: function() {
        // TODO: implement
      }
    }

    // Apply design-mode for each selected element
    return this.each(function() {
      new $.fn.DesignMode(this)
    })
  }
})(jQuery);