@App.module 'MainApp.Show', (Show, App, Backbone, Marionette, $, _) ->

  Show.Controller =

    showMain: ->
      mainView = @getMainView()
      App.layout.mainRegion.show mainView

    getMainView: ->
      new Show.Main()