@App.module 'LayoutApp.Show', (Show, App, Backbone, Marionette, $, _) ->

  class Show.LayoutRegion extends Marionette.Region
    el: '#layout__region'

  class Show.Layout extends Marionette.Layout
    template: '#layout__template'

    regions:
      headerRegion: '#header__region'
      mainRegion: '#main__region'
      footerRegion: '#footer__region'

  Show