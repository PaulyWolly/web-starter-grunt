@App.module "FooterApp.Show", (Show, App, Backbone, Marionette, $, _) ->

  Show.Controller =

    showFooter: ->
      footerView = @getFooterView()
      App.layout.footerRegion.show footerView

    getFooterView: ->
      new Show.Footer()