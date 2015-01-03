var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  "use strict";
  var Base, Device, device, modernizr, platform;
  device = require("device");
  platform = require("platform");
  modernizr = require("modernizr");
  Base = require("./base");
  Device = (function(_super) {
    __extends(Device, _super);

    Device.prototype.defaults = {
      type: "",
      os: "",
      browser: "",
      events: {
        click: "",
        resize: ""
      },
      modernizr: {}
    };

    function Device(options) {
      this._setOptions(options);
      this.type();
      this.os();
      this.events();
      this.browser();
      this.modernizr();
    }

    Device.prototype.type = function() {
      return this.options.type = device.mobile() ? "phone" : device.tablet() ? "tablet" : device.desktop() ? "desktop" : void 0;
    };

    Device.prototype.os = function() {
      return this.options.os = navigator.appVersion.indexOf("Windows") !== -1 ? "windows" : navigator.appVersion.indexOf("Macintosh") !== -1 ? "mac" : navigator.appVersion.indexOf("X11") !== -1 ? "unix" : navigator.appVersion.indexOf("Linux") !== -1 ? "linux" : void 0;
    };

    Device.prototype.browser = function() {
      return this.options.browser = {
        name: platform.name.toLowerCase(),
        version: parseFloat(platform.version)
      };
    };

    Device.prototype.events = function() {
      return this.options.events = {
        click: !device.desktop() ? "touchstart" : "click",
        resize: !device.desktop() ? "orientationchange" : "resize"
      };
    };

    Device.prototype.modernizr = function() {
      return this.options.modernizr = modernizr;
    };

    return Device;

  })(Base);
  return module.exports = Device;
});
