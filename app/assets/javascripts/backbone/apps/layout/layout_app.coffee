@App.module 'LayoutApp', (LayoutApp, App, Backbone, Marionette, $, _) ->
  @startWithParent = false

  API =
    showLayout: ->
      LayoutApp.Show.Controller.showLayout()

  LayoutApp.on 'start', ->
    API.showLayout()
