(function() {
  define(["path/marionette_app"], function(App) {
    return App.module("InitializeApp", function(InitializeApp, App, Backbone, Marionette, $, _) {
      var API;
      this.startWithParent = false;
      API = {
        initialize: function(options) {
          return require(["path/components/initialize/core/core_controller"], (function(_this) {
            return function() {
              return InitializeApp.Core.Controller.start(options);
            };
          })(this));
        }
      };
      return this.on("start", function(options) {
        return API.initialize(options);
      });
    });
  });

}).call(this);
