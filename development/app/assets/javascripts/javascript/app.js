define(function(require, exports, module) {
  "use strict";
  var App, JavascriptApp;
  JavascriptApp = require("./components/javascriptapp");
  App = (function(JavascriptApp) {
    return App = new JavascriptApp();
  })(JavascriptApp);
  return module.exports = App;
});
