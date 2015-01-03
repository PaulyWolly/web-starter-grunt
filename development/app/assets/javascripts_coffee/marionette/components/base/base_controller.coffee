define (require, exports, module) ->

  App = require "marionette.app"

  App.module "Base", (Base, App, Backbone, Marionette, $, _) ->

    class Base.Controller extends Marionette.Controller

      initialize: (options) ->
        if options.region then @region = options.region else @region = App.mainRegion
        @start(options)

      start: ->

      onDestroy: ->
        @region.reset() if @region
