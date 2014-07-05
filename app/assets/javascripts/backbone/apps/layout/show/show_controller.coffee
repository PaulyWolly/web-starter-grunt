@App.module 'LayoutApp.Show', (Show, App, Backbone, Marionette, $, _) ->

  Show.Controller =

    showLayout: ->
      layoutRegionView = @getLayoutRegionView()
      App.layout = @getLayoutView()
      layoutRegionView.show App.layout

    getLayoutView: ->
      new Show.Layout()

    getLayoutRegionView: ->
      new Show.LayoutRegion()

  Show