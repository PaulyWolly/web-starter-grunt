var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  "use strict";
  var Base, Menu;
  Base = require("./base");
  Menu = (function(_super) {
    __extends(Menu, _super);

    function Menu() {
      this._toggle = __bind(this._toggle, this);
      return Menu.__super__.constructor.apply(this, arguments);
    }

    Menu.prototype._body = function() {
      return this.options.$body;
    };

    Menu.prototype._eventClick = function() {
      return this.options.device.events.click;
    };

    Menu.prototype._menu = function() {
      return this.options.menuElement;
    };

    Menu.prototype._$menu = function() {
      return $(this._menu());
    };

    Menu.prototype._btn = function() {
      return this.options.btnElement;
    };

    Menu.prototype._$btn = function() {
      return $(this._btn());
    };

    Menu.prototype._active = function() {
      return this.options.activeClass.substring(1);
    };

    Menu.prototype._transition = function() {
      return this.options.transition;
    };

    Menu.prototype.update = function() {};

    Menu.prototype.show = function() {
      if (!this._$menu().hasClass(this._active())) {
        return this._$menu().addClass(this._active());
      }
    };

    Menu.prototype.hide = function() {
      if (this._$menu().hasClass(this._active())) {
        return this._$menu().removeClass(this._active());
      }
    };

    Menu.prototype._toggle = function() {
      if (!this.isActive) {
        this.isActive = true;
        if (!this.isOpen) {
          this.show();
          this.isOpen = true;
        } else {
          this.hide();
          this.isOpen = false;
        }
        return setTimeout(((function(_this) {
          return function() {
            return _this.isActive = false;
          };
        })(this)), this._transition());
      }
    };

    Menu.prototype._initEvents = function() {
      return this._body().on(this._eventClick(), this._btn(), this._toggle);
    };

    Menu.prototype.destroy = function() {
      return this._body().off(this._eventClick(), this._btn(), this._toggle);
    };

    Menu.prototype.start = function() {
      return this._initEvents();
    };

    return Menu;

  })(Base);
  return module.exports = Menu;
});
