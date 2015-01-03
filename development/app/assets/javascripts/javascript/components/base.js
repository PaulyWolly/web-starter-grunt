var __slice = [].slice,
  __hasProp = {}.hasOwnProperty;

define(function(require, exports, module) {
  "use strict";
  var $, Base;
  $ = require("jquery");
  Base = (function() {
    var merge;

    Base.prototype.defaults = {
      $window: $(window),
      $document: $(document),
      $html: $("html"),
      $body: $("body")
    };

    function Base(options) {
      this._setOptions(options);
    }

    Base.prototype._setOptions = function(options) {
      this.options = merge({}, this.defaults, options);
      return this;
    };

    Base.prototype.on = function(event, handler) {
      var _base;
      if (this._events == null) {
        this._events = {};
      }
      ((_base = this._events)[event] != null ? _base[event] : _base[event] = []).push(handler);
      return this;
    };

    Base.prototype.off = function(event, handler) {
      var index, suspect, _i, _len, _ref;
      _ref = this._events[event];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        suspect = _ref[index];
        if (suspect === handler) {
          this._events[event].splice(index, 1);
        }
      }
      return this;
    };

    Base.prototype.trigger = function() {
      var args, event, handler, _i, _len, _ref;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (this._events[event] == null) {
        return this;
      }
      _ref = this._events[event];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        handler = _ref[_i];
        handler.apply(this, args);
      }
      return this;
    };

    Base.include = function() {
      var objects;
      objects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      merge.apply(null, [this.prototype].concat(__slice.call(objects)));
      return this;
    };

    merge = function() {
      var extension, extensions, property, target, _i, _len;
      target = arguments[0], extensions = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_i = 0, _len = extensions.length; _i < _len; _i++) {
        extension = extensions[_i];
        for (property in extension) {
          if (!__hasProp.call(extension, property)) continue;
          target[property] = extension[property];
        }
      }
      return target;
    };

    return Base;

  })();
  return module.exports = Base;
});
