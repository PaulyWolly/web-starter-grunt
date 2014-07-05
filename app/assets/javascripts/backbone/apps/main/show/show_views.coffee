@App.module 'MainApp.Show', (Show, App, Backbone, Marionette, $, _) ->

  class Show.Main extends Marionette.CompositeView
    template: '#main__template'