@App.module "FooterApp.Show", (Show, App, Backbone, Marionette, $, _) ->

  class Show.Footer extends Marionette.ItemView
    template: '#footer__template'

  Show