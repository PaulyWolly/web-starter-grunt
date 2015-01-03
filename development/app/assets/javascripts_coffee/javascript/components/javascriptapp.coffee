define (require, exports, module) ->
  "use strict"

  Base = require "./base"

  Menu = require "./menu"

  class JavascriptApp extends Base

    start: (options) ->
      menu = new Menu
        device: options.device
        menuElement: ".js-menu"
        btnElement: ".js-menu-btn"
        activeClass: ".is-active"
        transition: 1000
      menu.start()

  module.exports = JavascriptApp
