(function() {
  define(["marionette"], function(Marionette) {
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
      return require(["components/initialize/initialize_app"], (function(_this) {
        return function() {
          App.module("InitializeApp").start(options);
          return console.log('start');
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
