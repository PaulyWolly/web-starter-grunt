require.config

  urlArgs: "bust=" +  (new Date()).getTime()

  baseUrl: ""

  waitSeconds: 15

  paths:
    "path":                     "app/assets/javascripts/application"
    "jquery":                   "vendor/assets/bower_components/jquery/dist/jquery"
    "underscore":               "vendor/assets/bower_components/underscore/underscore"
    "backbone":                 "vendor/assets/bower_components/backbone/backbone"
    "backbone.eventbinder":     "vendor/assets/bower_components/backbone.eventbinder/lib/backbone.eventbinder"
    "backbone.wreqr":           "vendor/assets/bower_components/backbone.wreqr/lib/backbone.wreqr"
    "backbone.localstorage":    "vendor/assets/bower_components/backbone.localstorage/backbone.localStorage"
    "backbone.relational":      "vendor/assets/bower_components/backbone.relational/backbone-relational"
    "backbone.syphon":          "vendor/assets/bower_components/backbone.syphon/lib/backbone.syphon"
    "backbone.babysitter":      "vendor/assets/bower_components/backbone.babysitter/lib/backbone.babysitter"
    "marionette":               "vendor/assets/bower_components/backbone.marionette/lib/backbone.marionette"
    "rivets":                   "vendor/assets/bower_components/rivets/dist/rivets"
    "text":                     "vendor/assets/bower_components/requirejs.text/text"
    "mustache":                 "vendor/assets/bower_components/mustache/mustache"
    "stache":                   "vendor/assets/bower_components/requirejs.mustache/stache"
    "ejs":                      "vendor/assets/bower_components/requirejs.ejs/ejs"
    "tpl":                      "vendor/assets/bower_components/requirejs.tpl/tpl"
    "domready":                 "vendor/assets/bower_components/requirejs.domready/domReady"
    "async":                    "vendor/assets/bower_components/requirejs.plugins/src/async"
    "font":                     "vendor/assets/bower_components/requirejs.plugins/src/font"
    "goog":                     "vendor/assets/bower_components/requirejs.plugins/src/goog"
    "image":                    "vendor/assets/bower_components/requirejs.plugins/src/image"
    "json":                     "vendor/assets/bower_components/requirejs.plugins/src/json"
    "mdown":                    "vendor/assets/bower_components/requirejs.plugins/src/mdown"
    "noext":                    "vendor/assets/bower_components/requirejs.plugins/src/noext"
    "googlemap":                "vendor/assets/bower_components/requirejs.googlemap/dist/GoogleMap"
    "modernizr":                "vendor/assets/bower_components/modernizr/modernizr"
    "cs":                       "vendor/assets/bower_components/require.cs/cs"
    "coffee-script":            "vendor/assets/bower_components/coffeescript/extras/coffee-script"
    "jquery.lazyload":          "vendor/assets/bower_components/jquery.lazyload/jquery.lazyload"
    "jquery.scrolltop":         "vendor/assets/bower_components/jquery.lazyload/jquery.scrollstop"
    "jquery.placeholder":       "vendor/assets/bower_components/jquery.placeholder/jquery.placeholder"
    "jquery.owl.carousel":      "vendor/assets/bower_components/jquery.owl.carousel/dist/owl.carousel"
    "jquery.cookie":            "vendor/assets/bower_components/jquery.cookie/jquery.cookie"
    "bootstrap":                "vendor/assets/bower_components/bootstrap-sass/assets/javascripts/bootstrap"
    "wow":                      "vendor/assets/bower_components/wow/dist/wow"
    "pace":                     "vendor/assets/bower_components/pace/pace"
    "moment":                   "vendor/assets/bower_components/moment/moment"
    "device":                   "vendor/assets/bower_components/device/lib/device"
    "platform":                 "vendor/assets/bower_components/platform.js/platform"
    "rem":                      "vendor/assets/components/rem/rem"
    "TimelineMax":              "vendor/assets/bower_components/gsap/src/uncompressed/TimelineMax"
    "TweenMax":                 "vendor/assets/bower_components/gsap/src/uncompressed/TweenMax"
    "TweenLite":                "vendor/assets/bower_components/gsap/src/uncompressed/TweenLite"
    "expo":                     "vendor/assets/bower_components/gsap/src/uncompressed/easing/EasePack"
    "skrollr":                  "vendor/assets/bower_components/skrollr/src/skrollr"
    "hammer":                   "vendor/assets/bower_components/hammerjs/hammer"

  shim:
    "jquery":                   { exports: "$" }
    "underscore":               { exports: "_" }
    "backbone":                 { deps: ["jquery", "underscore"], exports: "Backbone"}
    "backbone.wreqr":           { deps: ["backbone"] }
    "backbone.eventbinder":     { deps: ["backbone"] }
    "backbone.babysitter":      { deps: ["backbone"] }
    "backbone.localstorage":    { deps: ["backbone"] }
    "backbone.relational":      { deps: ["backbone"] }
    "backbone.syphon":          { deps: ["backbone"] }
    "marionette":               { deps: ["backbone"], exports: "Marionette" }
    "ejs":                      { exports: "ejs" }
    "mustache":                 { exports: "Mustache" }
    "cs":                       { deps: ["coffee-script"] }
    "jquery.placeholder":       { deps: ["jquery"], exports: "$.fn.placeholder" }
    "jquery.scrolltop":         { deps: ["jquery"], exports: "$.fn.scrolltop" }
    "jquery.lazyload":          { deps: ["jquery", "jquery.scrolltop"] }
    "jquery.owl.carousel":      { deps: ["jquery"], exports: "$.fn.owlCarousel" }
    "jquery.cookie":            { deps: ["jquery"], exports: "$.fn.cookie" }
    "bootstrap":                { deps: ["jquery"] }
    "bootstrap/affix":          { deps: ["jquery"], exports: "$.fn.affix" }
    "bootstrap/alert":          { deps: ["jquery"], exports: "$.fn.alert" }
    "bootstrap/button":         { deps: ["jquery"], exports: "$.fn.button" }
    "bootstrap/carousel":       { deps: ["jquery"], exports: "$.fn.carousel" }
    "bootstrap/collapse":       { deps: ["jquery"], exports: "$.fn.collapse" }
    "bootstrap/dropdown":       { deps: ["jquery"], exports: "$.fn.dropdown" }
    "bootstrap/modal":          { deps: ["jquery"], exports: "$.fn.modal" }
    "bootstrap/popover":        { deps: ["jquery"], exports: "$.fn.popover" }
    "bootstrap/scrollspy":      { deps: ["jquery"], exports: "$.fn.scrollspy" }
    "bootstrap/tab":            { deps: ["jquery"], exports: "$.fn.tab" }
    "bootstrap/tooltip":        { deps: ["jquery"], exports: "$.fn.tooltip" }
    "bootstrap/transition":     { deps: ["jquery"], exports: "$.fn.transition" }
    "wow":                      { exports: "WOW" }
    "pace":                     { exports: "pace" }
    "moment":                   { exports: "moment" }
    "rem":                      { deps: ["jquery"] }
    "device":                   { exports: "device" }
    "platform":                 { exports: "platform" }
    "googlemap":                { deps: ["async"], exports: "GoogleMap" }
    "modernizr":                { exports: "Modernizr" }
    "expo":                     { exports: "Expo" }
    "TimelineMax":              { deps: ["TweenLite"] }
    "skrollr":                  { exports: "skrollr" }
    "hammer":                   { exports: "Hammer" }

  stache:
    extension: '.mustache'

  tpl:
    extension: '.ejs'

require [
  "path/marionette_app"
  "path/script"
], (App) -> App.start()