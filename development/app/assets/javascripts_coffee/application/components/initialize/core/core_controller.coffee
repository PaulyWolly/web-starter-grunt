define ["path/marionette_app"], (App) ->
  App.module "InitializeApp.Core", (Core, App, Backbone, Marionette, $, _) ->

    Core.Controller =

      start: (options) ->