@App.module 'Entities', (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.Header extends  Backbone.Model

  class Entities.HeaderCollection extends  Backbone.Collection
    model: Entities.Header

  API =
    getHeaders: ->
      new Backbone.Collection [
        {
          name: 'Users'
          link: 'users'
        }
        {
          name: 'Leads'
          link: 'leads'
        }
        {
          name: 'Appointments'
          link: 'appointments'
        }
      ]

  App.reqres.setHandler 'header:entities', ->
    API.getHeaders()