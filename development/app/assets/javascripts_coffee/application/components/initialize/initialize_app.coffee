define [
  "app"
], (
  App
) ->

  App.module "InitializeApp", (InitializeApp, App, Backbone, Marionette, $, _) ->

    @startWithParent = false

    API =
      initialize: (options) ->
        require ["components/initialize/core/core_controller"], =>
          InitializeApp.Core.Controller.start(options)

    @.on "start", (options) ->
      API.initialize options