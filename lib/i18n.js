 // Internationalization
(function( $ ) {
  $.fn.DesignModeI18n = function(o) {
    var o = $.extend({
      locale : 'en'
    }, o)
    
	this.initialize(o)
  }

  $.fn.DesignModeI18n.prototype = {
    o       : null,
    locales : null,

    initialize: function(o) {
      this.o = $.extend({ locale : $.fn.DesignModeOptions().options.locale }, o)
      this.locales = $.fn.DesignModeLanguages[this.o.locale]
    },

    t: function(key) {
      
    }
  }
})(jQuery);