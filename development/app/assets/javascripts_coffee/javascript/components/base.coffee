define (require, exports, module) ->
  "use strict"

  $ = require "jquery"

  # Base class for project.
  class Base


    defaults:
      $window: $(window)
      $document: $(document)
      $html: $("html")
      $body: $("body")


    constructor: (options) ->
      @_setOptions(options)


    _setOptions: (options) ->
      @options = merge {}, @defaults, options
      @


    on: (event, handler) ->
      @_events ?= {}
      (@_events[event] ?= []).push handler
      @


    off: (event, handler) ->
      for suspect, index in @_events[event] when suspect is handler
        @_events[event].splice index, 1
      @


    trigger: (event, args...) ->
      unless @_events[event]? then return this
      handler.apply this, args for handler in @_events[event]
      @


    @include = (objects...) ->
      merge @prototype, objects...
      @


    merge =  (target, extensions...) ->
      for extension in extensions
        for own property of extension
          target[property] = extension[property]
      target


  module.exports = Base
