define (require, exports, module) ->

  App = require "marionette.app"

  App.module 'Config.Routes', (Routes, App, Backbone, Marionette, $, _) ->

    ##### Route helpers

    App.createApiPath = (methodName, options = {}) =>
      options = _(options).defaults { prefix : '/api' }
      "#{ options.prefix }/#{ methodName }/"

