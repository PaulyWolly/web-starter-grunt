var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  "use strict";
  var Base, JavascriptApp, Menu;
  Base = require("./base");
  Menu = require("./menu");
  JavascriptApp = (function(_super) {
    __extends(JavascriptApp, _super);

    function JavascriptApp() {
      return JavascriptApp.__super__.constructor.apply(this, arguments);
    }

    JavascriptApp.prototype.start = function(options) {
      var menu;
      menu = new Menu({
        device: options.device,
        menuElement: ".js-menu",
        btnElement: ".js-menu-btn",
        activeClass: ".is-active",
        transition: 1000
      });
      return menu.start();
    };

    return JavascriptApp;

  })(Base);
  return module.exports = JavascriptApp;
});
