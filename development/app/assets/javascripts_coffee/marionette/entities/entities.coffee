define (require, exports, module) ->
  "use strict"

  App = require "marionette.app"

  App.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->
