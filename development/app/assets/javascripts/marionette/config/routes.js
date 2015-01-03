define(function(require, exports, module) {
  var App;
  App = require("marionette.app");
  return App.module('Config.Routes', function(Routes, App, Backbone, Marionette, $, _) {
    return App.createApiPath = (function(_this) {
      return function(methodName, options) {
        if (options == null) {
          options = {};
        }
        options = _(options).defaults({
          prefix: '/api'
        });
        return "" + options.prefix + "/" + methodName + "/";
      };
    })(this);
  });
});
