var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var App;
  App = require("marionette.app");
  return App.module("Base", function(Base, App, Backbone, Marionette, $, _) {
    return Base.Controller = (function(_super) {
      __extends(Controller, _super);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function(options) {
        if (options.region) {
          this.region = options.region;
        } else {
          this.region = App.mainRegion;
        }
        return this.start(options);
      };

      Controller.prototype.start = function() {};

      Controller.prototype.onDestroy = function() {
        if (this.region) {
          return this.region.reset();
        }
      };

      return Controller;

    })(Marionette.Controller);
  });
});
