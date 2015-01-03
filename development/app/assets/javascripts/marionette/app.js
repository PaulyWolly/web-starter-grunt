define(function(require, exports, module) {
  "use strict";
  var App, Marionette;
  Marionette = require("marionette");
  App = (function(Backbone, Marionette) {
    App = new Marionette.Application();
    App.rootRoute = '';
    App.navigate = function(route, options) {
      options || (options = {});
      return Backbone.history.navigate(route, options);
    };
    App.getCurrentRoute = function() {
      return Backbone.history.fragment;
    };
    App.addRegions({
      mainRegion: '#layout-region'
    });
    App.on("before:start", function(options) {
      return this.device = options.device;
    });
    App.addInitializer((function(_this) {
      return function() {};
    })(this));
    return App.on('start', function() {
      if (Backbone.history) {
        Backbone.history.start({
          pushState: true
        });
        if (this.getCurrentRoute() === '') {
          return this.navigate(this.rootRoute, {
            trigger: true
          });
        }
      }
    });
  })(Backbone, Marionette);
  return module.exports = App;
});
