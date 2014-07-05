@App = do (Backbone, Marionette) ->

  App = new Marionette.Application

  App.addInitializer ->
    App.module('LayoutApp').start()
    App.module('HeaderApp').start()
    App.module('FooterApp').start()

  App.on 'initialize:after', ->
    if Backbone.history
      Backbone.history.start()

  App