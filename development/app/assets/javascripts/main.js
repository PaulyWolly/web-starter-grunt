define(function(require) {
  "use strict";
  var Device, JavascriptApp, MarionetteApp, device;
  Device = require("./javascript/components/device");
  device = new Device();
  JavascriptApp = require("./javascript/app");
  JavascriptApp.start({
    device: device.options
  });
  MarionetteApp = require("./marionette/app");
  require(["marionette.path/config/routes", "marionette.path/components/base/base_controller", "marionette.path/components/base/base_entities", "marionette.path/components/base/base_router", "marionette.path/components/base/base_views", "marionette.path/entities/entities"]);
  return MarionetteApp.start({
    device: device.options
  });
});
