(function() {
  define(["app"], function(App) {
    return App.module("InitializeApp.Core", function(Core, App, Backbone, Marionette, $, _) {
      return Core.Controller = {
        start: function(options) {}
      };
    });
  });

}).call(this);
