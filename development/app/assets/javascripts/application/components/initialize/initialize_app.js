(function() {
  define(["app"], function(App) {
    return App.module("InitializeApp", function(InitializeApp, App, Backbone, Marionette, $, _) {
      var API;
      this.startWithParent = false;
      API = {
        initialize: function(options) {
          return require(["components/initialize/core/core_controller"], function() {
            return InitializeApp.Core.Controller.start(options);
          });
        }
      };
      return this.on("start", function(options) {
        return API.initialize(options);
      });
    });
  });

}).call(this);
