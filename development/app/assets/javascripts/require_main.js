"use strict";
require.config({
  urlArgs: "bust=" + (new Date()).getTime(),
  baseUrl: "",
  waitSeconds: 15,
  paths: {
    "path": "app/assets/javascripts/",
    "marionette.path": "app/assets/javascripts/marionette",
    "marionette.app": "app/assets/javascripts/marionette/app",
    "javascript.app": "app/assets/javascripts/javascript/app",
    "jquery": "vendor/assets/bower_components/jquery/dist/jquery",
    "underscore": "vendor/assets/bower_components/underscore/underscore",
    "backbone": "vendor/assets/bower_components/backbone/backbone",
    "backbone.eventbinder": "vendor/assets/bower_components/backbone.eventbinder/lib/backbone.eventbinder",
    "backbone.wreqr": "vendor/assets/bower_components/backbone.wreqr/lib/backbone.wreqr",
    "backbone.localstorage": "vendor/assets/bower_components/backbone.localstorage/backbone.localStorage",
    "backbone.babysitter": "vendor/assets/bower_components/backbone.babysitter/lib/backbone.babysitter",
    "marionette": "vendor/assets/bower_components/backbone.marionette/lib/backbone.marionette",
    "rivets": "vendor/assets/bower_components/rivets/dist/rivets",
    "react": "vendor/assets/bower_components/react/build/react-with-addons",
    "JSXTransformer": "vendor/assets/bower_components/react/build/JSXTransformer",
    "jsx": "vendor/assets/bower_components/requirejs.react-jsx/jsx",
    "text": "vendor/assets/bower_components/requirejs.text/text",
    "tpl": "vendor/assets/bower_components/requirejs.tpl/tpl",
    "domready": "vendor/assets/bower_components/requirejs.domready/domReady",
    "async": "vendor/assets/bower_components/requirejs.plugins/src/async",
    "font": "vendor/assets/bower_components/requirejs.plugins/src/font",
    "goog": "vendor/assets/bower_components/requirejs.plugins/src/goog",
    "image": "vendor/assets/bower_components/requirejs.plugins/src/image",
    "json": "vendor/assets/bower_components/requirejs.plugins/src/json",
    "mdown": "vendor/assets/bower_components/requirejs.plugins/src/mdown",
    "noext": "vendor/assets/bower_components/requirejs.plugins/src/noext",
    "googlemap": "vendor/assets/bower_components/requirejs.googlemap/dist/GoogleMap",
    "modernizr": "vendor/assets/bower_components/modernizr/modernizr",
    "jquery.lazyload": "vendor/assets/bower_components/jquery.lazyload/jquery.lazyload",
    "jquery.scrolltop": "vendor/assets/bower_components/jquery.lazyload/jquery.scrollstop",
    "jquery.placeholder": "vendor/assets/bower_components/jquery.placeholder/jquery.placeholder",
    "jquery.owl.carousel": "vendor/assets/bower_components/jquery.owl.carousel/dist/owl.carousel",
    "jquery.cookie": "vendor/assets/bower_components/jquery.cookie/jquery.cookie",
    "bootstrap": "vendor/assets/bower_components/bootstrap-sass/assets/javascripts/bootstrap",
    "pace": "vendor/assets/bower_components/pace/pace",
    "moment": "vendor/assets/bower_components/moment/moment",
    "device": "vendor/assets/bower_components/device/lib/device",
    "platform": "vendor/assets/bower_components/platform/platform",
    "TimelineMax": "vendor/assets/bower_components/gsap/src/uncompressed/TimelineMax",
    "TweenMax": "vendor/assets/bower_components/gsap/src/uncompressed/TweenMax",
    "TweenLite": "vendor/assets/bower_components/gsap/src/uncompressed/TweenLite",
    "expo": "vendor/assets/bower_components/gsap/src/uncompressed/easing/EasePack",
    "skrollr": "vendor/assets/bower_components/skrollr/src/skrollr",
    "hammer": "vendor/assets/bower_components/hammerjs/hammer"
  },
  shim: {
    "jquery": {
      exports: "$"
    },
    "underscore": {
      exports: "_"
    },
    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    "backbone.wreqr": {
      deps: ["backbone"]
    },
    "backbone.eventbinder": {
      deps: ["backbone"]
    },
    "backbone.babysitter": {
      deps: ["backbone"]
    },
    "backbone.localstorage": {
      deps: ["backbone"]
    },
    "backbone.relational": {
      deps: ["backbone"]
    },
    "backbone.syphon": {
      deps: ["backbone"]
    },
    "marionette": {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "react": {
      "exports": "React"
    },
    "JSXTransformer": {
      "exports": "JSXTransformer"
    },
    "jquery.placeholder": {
      deps: ["jquery"],
      exports: "$.fn.placeholder"
    },
    "jquery.scrolltop": {
      deps: ["jquery"],
      exports: "$.fn.scrolltop"
    },
    "jquery.lazyload": {
      deps: ["jquery", "jquery.scrolltop"]
    },
    "jquery.owl.carousel": {
      deps: ["jquery"],
      exports: "$.fn.owlCarousel"
    },
    "jquery.cookie": {
      deps: ["jquery"],
      exports: "$.fn.cookie"
    },
    "bootstrap": {
      deps: ["jquery"]
    },
    "bootstrap/affix": {
      deps: ["jquery"],
      exports: "$.fn.affix"
    },
    "bootstrap/alert": {
      deps: ["jquery"],
      exports: "$.fn.alert"
    },
    "bootstrap/button": {
      deps: ["jquery"],
      exports: "$.fn.button"
    },
    "bootstrap/carousel": {
      deps: ["jquery"],
      exports: "$.fn.carousel"
    },
    "bootstrap/collapse": {
      deps: ["jquery"],
      exports: "$.fn.collapse"
    },
    "bootstrap/dropdown": {
      deps: ["jquery"],
      exports: "$.fn.dropdown"
    },
    "bootstrap/modal": {
      deps: ["jquery"],
      exports: "$.fn.modal"
    },
    "bootstrap/popover": {
      deps: ["jquery"],
      exports: "$.fn.popover"
    },
    "bootstrap/scrollspy": {
      deps: ["jquery"],
      exports: "$.fn.scrollspy"
    },
    "bootstrap/tab": {
      deps: ["jquery"],
      exports: "$.fn.tab"
    },
    "bootstrap/tooltip": {
      deps: ["jquery"],
      exports: "$.fn.tooltip"
    },
    "bootstrap/transition": {
      deps: ["jquery"],
      exports: "$.fn.transition"
    },
    "pace": {
      exports: "pace"
    },
    "moment": {
      exports: "moment"
    },
    "rem": {
      deps: ["jquery"]
    },
    "device": {
      exports: "device"
    },
    "platform": {
      exports: "platform"
    },
    "googlemap": {
      deps: ["async"],
      exports: "GoogleMap"
    },
    "modernizr": {
      exports: "Modernizr"
    },
    "expo": {
      exports: "Expo"
    },
    "TimelineMax": {
      deps: ["TweenLite"]
    },
    "skrollr": {
      exports: "skrollr"
    },
    "hammer": {
      exports: "Hammer"
    }
  },
  tpl: {
    extension: '.ejs'
  },
  jsx: {
    fileExtension: ".jsx",
    transformOptions: {
      harmony: true,
      stripTypes: false
    },
    usePragma: false
  }
});

require(["path/main"]);
