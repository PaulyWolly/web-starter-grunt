pathBowerComponents = "../../../../vendor/assets/bower_components/"
pathComponents      = "../../../../vendor/assets/components/"

require.config

  urlArgs: "bust=" +  (new Date()).getTime()

  baseUrl: "app/assets/javascripts/application/"

  paths:
    jquery:                   pathBowerComponents + "jquery/dist/jquery"
    underscore:               pathBowerComponents + "underscore/underscore"
    backbone:                 pathBowerComponents + "backbone/backbone"
    "backbone.eventbinder":   pathBowerComponents + "backbone.eventbinder/lib/backbone.eventbinder"
    "backbone.wreqr":         pathBowerComponents + "backbone.wreqr/lib/backbone.wreqr"
    "backbone.localstorage":  pathBowerComponents + "backbone.localstorage/backbone.localStorage"
    "backbone.relational":    pathBowerComponents + "backbone.relational/backbone-relational"
    "backbone.syphon":        pathBowerComponents + "backbone.syphon/lib/backbone.syphon"
    "backbone.babysitter":    pathBowerComponents + "backbone.babysitter/lib/backbone.babysitter"
    marionette:               pathBowerComponents + "backbone.marionette/lib/backbone.marionette"
    rivets:                   pathBowerComponents + "rivets/dist/rivets"
    "text":                   pathBowerComponents + "requirejs.text/text"
    "ejs":                    pathBowerComponents + "requirejs.ejs/ejs"
    "domready":               pathBowerComponents + "requirejs.domready/domReady"
    "async":                  pathBowerComponents + "requirejs.plugins/src/async"
    "font":                   pathBowerComponents + "requirejs.plugins/src/font"
    "goog":                   pathBowerComponents + "requirejs.plugins/src/goog"
    "image":                  pathBowerComponents + "requirejs.plugins/src/image"
    "json":                   pathBowerComponents + "requirejs.plugins/src/json"
    "mdown":                  pathBowerComponents + "requirejs.plugins/src/mdown"
    "noext":                  pathBowerComponents + "requirejs.plugins/src/noext"
    "googlemap":              pathBowerComponents + "requirejs.googlemap/dist/GoogleMap"
    modernizr:                pathBowerComponents + "modernizr/modernizr"
    "jquery.lazyload":        pathBowerComponents + "jquery.lazyload/jquery.lazyload"
    "jquery.scrolltop":       pathBowerComponents + "jquery.lazyload/jquery.scrollstop"
    "jquery.placeholder":     pathBowerComponents + "jquery.placeholder/jquery.placeholder"
    "jquery.owl.carousel":    pathBowerComponents + "jquery.owl.carousel/dist/owl.carousel"
    "jquery.cookie":          pathBowerComponents + "jquery.cookie/jquery.cookie"
    wow:                      pathBowerComponents + "wow/dist/wow"
    pace:                     pathBowerComponents + "pace/pace"
    moment:                   pathBowerComponents + "moment/moment"
    bootstrap:                pathBowerComponents + "bootstrap-sass/assets/javascripts/bootstrap"
    device:                   pathBowerComponents + "device/lib/device"
    rem:                      pathComponents + "rem/rem"

  shim:
    jquery:                   { exports: "$" }
    underscore:               { exports: "_" }
    backbone:                 { deps: ["jquery", "underscore"], exports: "Backbone"}
    "backbone.wreqr":         { deps: ["backbone"] }
    "backbone.eventbinder":   { deps: ["backbone"] }
    "backbone.babysitter":    { deps: ["backbone"] }
    "backbone.localstorage":  { deps: ["backbone"] }
    "backbone.relational":    { deps: ["backbone"] }
    "backbone.syphon":        { deps: ["backbone"] }
    marionette:               { deps: ["backbone"], exports: "Marionette" }
    "ejs":                    { exports: "ejs" }
    "jquery.placeholder":     { deps: ["jquery"] }
    "jquery.scrolltop":       { deps: ["jquery"] }
    "jquery.lazyload":        { deps: ["jquery", "jquery.scrolltop"] }
    "jquery.owl.carousel":    { deps: ["jquery"] }
    "jquery.cookie":          { deps: ["jquery"] }
    wow:                      { exports: "WOW" }
    pace:                     { exports: "pace" }
    moment:                   { exports: "moment" }
    rem:                      { deps: ["jquery"] }
    device:                   { exports: "device" }
    "googlemap":              { deps: ["async"], exports: "GoogleMap" }
    bootstrap:                { deps: ["jquery"] }
    "bootstrap/affix":        { deps: ["jquery"], exports: "$.fn.affix" }
    "bootstrap/alert":        { deps: ["jquery"], exports: "$.fn.alert" }
    "bootstrap/button":       { deps: ["jquery"], exports: "$.fn.button" }
    "bootstrap/carousel":     { deps: ["jquery"], exports: "$.fn.carousel" }
    "bootstrap/collapse":     { deps: ["jquery"], exports: "$.fn.collapse" }
    "bootstrap/dropdown":     { deps: ["jquery"], exports: "$.fn.dropdown" }
    "bootstrap/modal":        { deps: ["jquery"], exports: "$.fn.modal" }
    "bootstrap/popover":      { deps: ["jquery"], exports: "$.fn.popover" }
    "bootstrap/scrollspy":    { deps: ["jquery"], exports: "$.fn.scrollspy" }
    "bootstrap/tab":          { deps: ["jquery"], exports: "$.fn.tab"        }
    "bootstrap/tooltip":      { deps: ["jquery"], exports: "$.fn.tooltip" }
    "bootstrap/transition":   { deps: ["jquery"], exports: "$.fn.transition" }

require [
  "app"
],
(
  App
) ->
  App.start()