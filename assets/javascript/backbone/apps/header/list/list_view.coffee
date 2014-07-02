@App.module 'HeaderApp.List', (List, App, Backbone, Marionette, $, _) ->


  class List.Header extends  Marionette.ItemView
    template: '#_header__template'
    tagName: 'li'

  class List.Headers extends  Marionette.CompositeView
    template: '#header__template'
    itemView: List.Header
    itemViewContainer: 'ul'