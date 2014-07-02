@App = do (Backbone, Marionette) ->

  App = new Marionette.Application

  App.addRegions
    headerRegion: '#header__region'
    mainRegion: '#main__region'
    footerRegion: '#footer__region'

  App.addInitializer ->
    App.module('HeaderApp').start()
    App.module('FooterApp').start()

  App.on 'initialize:after', ->
    if Backbone.history
      Backbone.history.start()

  App