define [
  "modernizr", "device", "platform", "jquery"
], (
  Modernizr, device, platform, $
) ->

  class Project

    defaults:
      $window: $(window)
      $document: $(document)
      $html: $('html')
      $body: $('body')

    constructor: (options) ->
      @setOptions options
      @setOptions
        $placeholderForms: @options.$body.find("input, textarea")

    setOptions: (options) ->
      @options = merge {}, @defaults, options
      this

    on: (event, handler) ->
      @_events ?= {}
      (@_events[event] ?= []).push handler
      this

    off: (event, handler) ->
      for suspect, index in @_events[event] when suspect is handler
        @_events[event].splice index, 1
      this

    trigger: (event, args...) ->
      return this unless @_events[event]?
      handler.apply this, args for handler in @_events[event]
      this

    @include = (objects...) ->
      merge @prototype, objects...
      this

    ###### private helper
    merge =  (target, extensions...) ->
      for extension in extensions
        for own property of extension
          target[property] = extension[property]
      target

    ###### Set browser and os version class name to @$html
    setBrowserVersion: ->
      name = platform.name.toLowerCase()
      version = name + parseFloat(platform.version)
      if navigator.appVersion.indexOf("Windows") != -1 then os = "windows"
      else if navigator.appVersion.indexOf("Macintosh") != -1 then os = "mac"
      else if navigator.appVersion.indexOf("X11") != -1 then os = "unix"
      else if navigator.appVersion.indexOf("Linux") != -1 then os = "linux"
      @options.$html.addClass( "#{os} #{name} #{version}")

    ###### Set placeholder for old browsers
    setBrowserPlaceholder: () ->
      if @options.$html.hasClass("ie7") or @options.$html.hasClass("ie8")
        require ["jquery.placeholder"], =>
          @options.$placeholderForms.placeholder()

    ###### test events
    events: () ->
      @options.$window.on "click", -> console.log 'click'
      @options.$window.on "resize", -> console.log 'resize'
      @options.$window.on "orientationchange", -> console.log 'orientationchange'
      @options.$window.on "scroll", -> console.log 'scroll'
      @options.$window.on "mousewheel", -> console.log 'mousewheel'
      @options.$window.on "touchstart", -> console.log 'touchstart'
      @options.$window.on "touchmove", -> console.log 'touchmove'
      @options.$window.on "touchend", -> console.log 'touchend'

      require ["hammer"], (Hammer) ->
        myElement = document.getElementsByTagName("html")[0]
        mc = new Hammer(myElement)
        mc.get('pan').set({ direction: Hammer.DIRECTION_ALL })
        mc.on "panleft panright panup pandown tap press swipeleft swiperight", (ev) ->
          console.log ev.type

  project = new Project()
  project.setBrowserVersion()
  project.setBrowserPlaceholder()
#  project.events()
