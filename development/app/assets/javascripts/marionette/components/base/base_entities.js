var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var App;
  App = require("marionette.app");
  return App.module("Base", function(Base, App, Backbone, Marionette, $, _) {
    Base.Model = (function(_super) {
      __extends(Model, _super);

      function Model() {
        return Model.__super__.constructor.apply(this, arguments);
      }

      return Model;

    })(Backbone.Model);
    return Base.Collection = (function(_super) {
      __extends(Collection, _super);

      function Collection() {
        return Collection.__super__.constructor.apply(this, arguments);
      }

      Collection.prototype.createOptionsIfDefined = function(check, create, options) {
        return _(options).each((function(_this) {
          return function(option) {
            if (!_(check[option]).isUndefined()) {
              return create[option] = check[option];
            }
          };
        })(this));
      };

      return Collection;

    })(Backbone.Collection);
  });
});
