define (require, exports, module) ->

  App = require "marionette.app"

  App.module "Base", (Base, App, Backbone, Marionette, $, _) ->

    class Base.AppRouter extends Marionette.AppRouter
