define ["path/marionette_app"], (App) ->

  "use strict"

  App.module "InitializeApp.Core", (Core, App, Backbone, Marionette, $, _) ->

    Core.Controller =

      start: (options) ->