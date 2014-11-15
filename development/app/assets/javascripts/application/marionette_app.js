(function() {
  define(["marionette"], function(Marionette) {
    "use strict";
    var App;
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
      return require(["path/components/initialize/initialize_app"], (function(_this) {
        return function() {
          return App.module("InitializeApp").start(options);
        };
      })(this));
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
  });

}).call(this);
