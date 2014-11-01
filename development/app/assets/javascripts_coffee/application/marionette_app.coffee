define ["marionette"], (Marionette) ->

  App = new Marionette.Application()

  App.rootRoute = ''

  App.navigate = (route, options) ->
    options or (options = {})
    Backbone.history.navigate route, options

  App.getCurrentRoute = ->
    Backbone.history.fragment

  App.addRegions
    mainRegion: '#layout-region'

  App.on "before:start", (options) ->
    require ["path/components/initialize/initialize_app"], =>
      App.module("InitializeApp").start(options)

  App.addInitializer =>

  App.on 'start', ->
    if Backbone.history
      Backbone.history.start
        pushState: true
      if @getCurrentRoute() is ''
        @navigate(@rootRoute, trigger: true)