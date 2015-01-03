var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var App;
  App = require("marionette.app");
  return App.module("Base", function(Base, App, Backbone, Marionette, $, _) {
    return Base.AppRouter = (function(_super) {
      __extends(AppRouter, _super);

      function AppRouter() {
        return AppRouter.__super__.constructor.apply(this, arguments);
      }

      return AppRouter;

    })(Marionette.AppRouter);
  });
});
