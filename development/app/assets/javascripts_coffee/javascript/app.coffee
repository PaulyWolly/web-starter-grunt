define (require, exports, module) ->
  "use strict"

  JavascriptApp = require "./components/javascriptapp"

  App = do (JavascriptApp) ->

    App = new JavascriptApp()

  module.exports = App
