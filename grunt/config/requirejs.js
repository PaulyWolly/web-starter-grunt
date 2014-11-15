'use strict';

var config = require('../config');

module.exports = {
  compile: {
    options: {

      mainConfigFile: "<%= config.development %>/app/assets/javascripts/require_main.js",
      baseUrl: "<%= config.development %>/",
      name: "app/assets/javascripts/require_main",
      out: "<%= config.production %>/app/assets/javascripts/require_main.js",

      findNestedDependencies: true,
      inlineText: true,
      optimize: "uglify2",
      wrap: true,
      wrapShim: true,
      preserveLicenseComments: false,
      exclude: ['jsx'],

      onBuildWrite: function (moduleName, path, singleContents) {
        return singleContents.replace(/jsx!/g, '').replace(/stache!/g, '').replace(/tpl!/g, '');
      },
      done: function(done, output) {
        var duplicates = require('rjs-build-analysis').duplicates(output);
        if (duplicates.length > 0) {
          grunt.log.subhead('Duplicates found in requirejs build:');
          grunt.log.warn(duplicates);
          return done(new Error('r.js built duplicate modules, please check the excludes option.'));
        }
        done();
      },

    }
  }
};