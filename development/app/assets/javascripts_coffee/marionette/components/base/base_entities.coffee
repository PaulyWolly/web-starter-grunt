define (require, exports, module) ->

  App = require "marionette.app"

  App.module "Base", (Base, App, Backbone, Marionette, $, _) ->

    class Base.Model extends Backbone.Model

    class Base.Collection extends Backbone.Collection

      createOptionsIfDefined: (check, create, options) ->
        _(options).each (option) => create[option] = check[option] unless _(check[option]).isUndefined()
