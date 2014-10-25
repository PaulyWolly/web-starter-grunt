(function() {
  var __slice = [].slice,
    __hasProp = {}.hasOwnProperty;

  define(["modernizr", "device", "platform", "jquery"], function(Modernizr, device, platform, $) {
    var Project, project;
    Project = (function() {
      var merge;

      Project.prototype.defaults = {
        $window: $(window),
        $document: $(document),
        $html: $('html'),
        $body: $('body')
      };

      function Project(options) {
        this.setOptions(options);
        this.setOptions({
          $placeholderForms: this.options.$body.find("input, textarea")
        });
      }

      Project.prototype.setOptions = function(options) {
        this.options = merge({}, this.defaults, options);
        return this;
      };

      Project.prototype.on = function(event, handler) {
        var _base;
        if (this._events == null) {
          this._events = {};
        }
        ((_base = this._events)[event] != null ? _base[event] : _base[event] = []).push(handler);
        return this;
      };

      Project.prototype.off = function(event, handler) {
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

      Project.prototype.trigger = function() {
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

      Project.include = function() {
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

      Project.prototype.setBrowserVersion = function() {
        var name, os, version;
        name = platform.name.toLowerCase();
        version = name + parseFloat(platform.version);
        if (navigator.appVersion.indexOf("Windows") !== -1) {
          os = "windows";
        } else if (navigator.appVersion.indexOf("Macintosh") !== -1) {
          os = "mac";
        } else if (navigator.appVersion.indexOf("X11") !== -1) {
          os = "unix";
        } else if (navigator.appVersion.indexOf("Linux") !== -1) {
          os = "linux";
        }
        return this.options.$html.addClass("" + os + " " + name + " " + version);
      };

      Project.prototype.setBrowserPlaceholder = function() {
        if (this.options.$html.hasClass("ie7") || this.options.$html.hasClass("ie8")) {
          return require(["jquery.placeholder"], (function(_this) {
            return function() {
              return _this.options.$placeholderForms.placeholder();
            };
          })(this));
        }
      };

      Project.prototype.events = function() {
        this.options.$window.on("click", function() {
          return console.log('click');
        });
        this.options.$window.on("resize", function() {
          return console.log('resize');
        });
        this.options.$window.on("orientationchange", function() {
          return console.log('orientationchange');
        });
        this.options.$window.on("scroll", function() {
          return console.log('scroll');
        });
        this.options.$window.on("mousewheel", function() {
          return console.log('mousewheel');
        });
        this.options.$window.on("touchstart", function() {
          return console.log('touchstart');
        });
        this.options.$window.on("touchmove", function() {
          return console.log('touchmove');
        });
        this.options.$window.on("touchend", function() {
          return console.log('touchend');
        });
        return require(["hammer"], function(Hammer) {
          var mc, myElement;
          myElement = document.getElementsByTagName("html")[0];
          mc = new Hammer(myElement);
          mc.get('pan').set({
            direction: Hammer.DIRECTION_ALL
          });
          return mc.on("panleft panright panup pandown tap press swipeleft swiperight", function(ev) {
            return console.log(ev.type);
          });
        });
      };

      return Project;

    })();
    project = new Project();
    project.setBrowserVersion();
    return project.setBrowserPlaceholder();
  });

}).call(this);
