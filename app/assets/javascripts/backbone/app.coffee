@App = do (Backbone, Marionette) ->

  App = new Marionette.Application()

  App.on "initialize:before", (options) ->
    App.module('InitializeApp').start
      options: options

  App.addInitializer ->
    App.module('LayoutApp').start()
    App.module('HeaderApp').start()
    App.module('MainApp').start()
    App.module('FooterApp').start()

  App.on 'initialize:after', ->
    if Backbone.history
      Backbone.history.start()

  App