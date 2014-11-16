define [
  "path/marionette_app"
#  "react"
#  "jsx!path/components/initialize/core/component"
], (
  App
#  React
#  Component
) ->
  "use strict"

#  {div, h2} = React.DOM
#  Hello = React.createClass
#    render: ->
#      h2 { className: 'test'}, ['Hello ' + @props.name]

#  React.renderComponent (Hello {}), document.body

#  component = new Component();
#  component.init()

  App.module "InitializeApp.Core", (Core, App, Backbone, Marionette, $, _) ->
    Core.Controller =
      start: (options) ->