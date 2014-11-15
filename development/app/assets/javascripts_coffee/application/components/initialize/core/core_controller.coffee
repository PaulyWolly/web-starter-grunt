define [
  "path/marionette_app"
  "react"
], (
  App
  React
) ->
  "use strict"


  App.module "InitializeApp.Core", (Core, App, Backbone, Marionette, $, _) ->

    Core.Controller =

      start: (options) ->