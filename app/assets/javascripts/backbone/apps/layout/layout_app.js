// Generated by CoffeeScript 1.7.1
(function() {
  this.App.module('LayoutApp', function(LayoutApp, App, Backbone, Marionette, $, _) {
    var API;
    this.startWithParent = false;
    API = {
      showLayout: function() {
        return LayoutApp.Show.Controller.showLayout();
      }
    };
    return LayoutApp.on('start', function() {
      return API.showLayout();
    });
  });

}).call(this);

//# sourceMappingURL=layout_app.map
