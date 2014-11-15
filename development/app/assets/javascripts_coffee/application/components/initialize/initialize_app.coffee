define [
  "path/marionette_app"
], (
  App
) ->
  "use strict"

  App.module "InitializeApp", (InitializeApp, App, Backbone, Marionette, $, _) ->

    @startWithParent = false

    API =
      initialize: (options) ->
        require ["path/components/initialize/core/core_controller"], =>
          InitializeApp.Core.Controller.start(options)

    @.on "start", (options) ->
      API.initialize options