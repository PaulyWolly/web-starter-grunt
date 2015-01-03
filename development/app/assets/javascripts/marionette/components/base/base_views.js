var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var App;
  App = require("marionette.app");
  return App.module("Base", function(Base, App, Backbone, Marionette, $, _) {
    Base.LayoutView = (function(_super) {
      __extends(LayoutView, _super);

      function LayoutView() {
        return LayoutView.__super__.constructor.apply(this, arguments);
      }

      return LayoutView;

    })(Marionette.LayoutView);
    Base.ItemView = (function(_super) {
      __extends(ItemView, _super);

      function ItemView() {
        return ItemView.__super__.constructor.apply(this, arguments);
      }

      return ItemView;

    })(Marionette.ItemView);
    Base.CollectionView = (function(_super) {
      __extends(CollectionView, _super);

      function CollectionView() {
        return CollectionView.__super__.constructor.apply(this, arguments);
      }

      return CollectionView;

    })(Marionette.CollectionView);
    return Base.CompositeView = (function(_super) {
      __extends(CompositeView, _super);

      function CompositeView() {
        return CompositeView.__super__.constructor.apply(this, arguments);
      }

      return CompositeView;

    })(Marionette.CompositeView);
  });
});
