define [
  "path/marionette_app"
  "react"
], (
  App
  React
) ->
  "use strict"

  console.log React

  App.module "InitializeApp.Core", (Core, App, Backbone, Marionette, $, _) ->

    Core.Controller =

      start: (options) ->