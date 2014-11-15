define [
  "path/marionette_app"
#  "react"
], (
  App
#  React
) ->
  "use strict"

#  {div, h2} = React.DOM
#  Hello = React.createClass
#    render: ->
#      h2 { className: 'test'}, ['Hello ' + @props.name]
#  React.renderComponent (Hello {}), document.body

  App.module "InitializeApp.Core", (Core, App, Backbone, Marionette, $, _) ->
    Core.Controller =
      start: (options) ->