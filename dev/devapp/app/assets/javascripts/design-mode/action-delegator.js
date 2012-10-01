(function( $ ) {
  $.fn.DesignModeActionDelegator = function(o) { this.initialize() }

  $.fn.DesignModeActionDelegator.prototype = {
    initialize: function() {},

    delegateButtonClick: function(button, iframe) {
      switch (button.attr('rel')) {
        case 'indent':
        case 'outdent':
          alert('yay!')
        break;
        case 'video':
          new $.fn.DesignModePluginVideo
        break;
        case 'image':
          new $.fn.DesignModePluginImage
        break;
        case 'hyperlink':
          new $.fn.DesignModePluginHyperlink
        break;
        case 'file':
          new $.fn.DesignModePluginFile
        break;
        default:
          return button
        break;
      }
    }
  }
})(jQuery);