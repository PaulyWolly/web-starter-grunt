define (require, exports, module) ->
  "use strict"

  device = require "device"
  platform = require "platform"
  modernizr = require "modernizr"
  Base = require "./base"

  # Device class.
  class Device extends Base

    defaults:
      type: ""
      os: ""
      browser: ""
      events:
        click: ""
        resize: ""
      modernizr: {}


    # Constructor a new Device.
    #
    # @param [Object] options
    #
    constructor: (options) ->
      @_setOptions(options)
      @type()
      @os()
      @events()
      @browser()
      @modernizr()


    # Return type of device.
    #
    # @example Detect type
    #   new Device.type()
    #
    type: ->
      @options.type = if device.mobile() then "phone"
      else if device.tablet() then "tablet"
      else if device.desktop() then "desktop"


    # Return os name.
    #
    # @example Detect os
    #   new Device.os()
    #
    os: ->
      @options.os = if navigator.appVersion.indexOf("Windows") != -1 then "windows"
      else if navigator.appVersion.indexOf("Macintosh") != -1 then "mac"
      else if navigator.appVersion.indexOf("X11") != -1 then "unix"
      else if navigator.appVersion.indexOf("Linux") != -1 then "linux"


    # Return browser name.
    #
    # @example Detect browser
    #   new Device.browser()
    #
    browser: ->
      @options.browser =
        name: platform.name.toLowerCase()
        version: parseFloat(platform.version)


    # Return type of events.
    #
    # @example Detect events: click / tap, resize / orientationchange
    #   new Device.events()
    #
    events: ->
      @options.events =
        click: unless device.desktop() then "touchstart" else "click"
        resize: unless device.desktop() then "orientationchange" else "resize"


    # Return html5 and css3 features.
    #
    # @example Detect features
    #   new Device.modernizr()
    #
    modernizr: -> @options.modernizr = modernizr


  module.exports = Device
