define (require, exports, module) ->
  "use strict"

  Base = require "./base"

  class Menu extends Base


    _body: -> @options.$body


    _eventClick: -> @options.device.events.click


    # Get menu element.
    _menu: -> @options.menuElement


    # Get menu object.
    _$menu: -> $(@_menu())


    # Get btn element.
    _btn: -> @options.btnElement


    # Get btn object.
    _$btn: -> $(@_btn())


    # Get active menu classname.
    _active: -> @options.activeClass.substring(1)


    # Time between transitions menu.
    _transition: -> @options.transition


    # Update menu options.
    update: ->


    # Show menu.
    show: ->
      unless @_$menu().hasClass(@_active())
        @_$menu().addClass(@_active())


    # Hide menu.
    hide: ->
      if @_$menu().hasClass(@_active())
        @_$menu().removeClass(@_active())


    # Toggle menu.
    _toggle: =>
      unless @isActive
        @isActive = true
        unless @isOpen
          @show()
          @isOpen = true
        else
          @hide()
          @isOpen = false
        setTimeout (=> @isActive = false), @_transition()


    # Init events.
    _initEvents: ->
      @_body().on @_eventClick(), @_btn(), @_toggle


    # Destroy menu.
    destroy: ->
      @_body().off @_eventClick(), @_btn(), @_toggle


    # Start menu app.
    start: ->
      @_initEvents()


  module.exports = Menu
