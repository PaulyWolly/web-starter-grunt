(function() {
  define(["path/marionette_app", "react"], function(App, React) {
    "use strict";
    console.log(React);
    return App.module("InitializeApp.Core", function(Core, App, Backbone, Marionette, $, _) {
      return Core.Controller = {
        start: function(options) {}
      };
    });
  });

}).call(this);
