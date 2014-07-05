@App.module 'MainApp', (MainApp, App, Backbone, Marionette, $, _) ->
  @startWithParent = false

  class MainApp.Router extends Marionette.AppRouter
    initialize: ->
      console.log 'Init Router'

    appRoutes:
      '': 'showMain'
      'users': 'showUsers'
      'leads': 'showLeads'
      'appointments': 'showAppointments'

  API =
    showMain: ->
      MainApp.Show.Controller.showMain()
    showUsers: ->
      console.log 'Show Users'
    showLeads: ->
      console.log 'Show Leads'
    showAppointments: ->
      console.log 'Show Appointments'

  App.addInitializer ->
    new MainApp.Router
      controller: API