//= require jquery

// Vendor
// require ./design-mode/jquery.ui.widget.js
// require ./design-mode/jquery.iframe-transport.js
// require ./design-mode/jquery.fileupload.js
// require ./design-mode/textselect.js

// DesignMode
//= require ./design-mode/languages/ru
//= require ./design-mode/toolbars/default

//= require ./design-mode/action-delegator
//= require ./design-mode/i18n

//= require ./design-mode/plugins/video
//= require ./design-mode/plugins/image
//= require ./design-mode/plugins/hyperlink
//= require ./design-mode/plugins/file

//= require ./design-mode/dialog
//= require ./design-mode/overlay
//= require ./design-mode/iframe
//= require ./design-mode/iframe-resizer
//= require ./design-mode/toolbar
//= require ./design-mode/editor

$(function() {
  $('form textarea').designMode()
})