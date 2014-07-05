@App.module 'InitializeApp', (InitializeApp, App, Backbone, Marionette, $, _) ->
  @startWithParent = false

  API =
    initialize: (options)->
      console.log 'Constructor Init!'

  InitializeApp.on 'start', (options) ->
    API.initialize options
