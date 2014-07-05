@App.module 'InitializeApp', (InitializeApp, App, Backbone, Marionette, $, _) ->
  @startWithParent = false

  API =
    initialize: (options)->

  InitializeApp.on "start", (options = {}) ->
    API.initialize options
