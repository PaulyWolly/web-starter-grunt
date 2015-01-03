module.exports = function(grunt) {

  'use strict';
  var config = require('./grunt/config');

  grunt.initConfig({
    config:            config,
    pkg:               grunt.file.readJSON('package.json'),
    watch:             require('./grunt/config/watch'),
    connect:           require('./grunt/config/connect'),
    throttle:          require('./grunt/config/throttle'),
    coffee:            require('./grunt/config/coffee'),
    requirejs:         require('./grunt/config/requirejs'),
    sass:              require('./grunt/config/sass'),
    csscomb:           require('./grunt/config/csscomb'),
    autoprefixer:      require('./grunt/config/autoprefixer'),
    cssmin:            require('./grunt/config/cssmin'),
    'css_mqpacker':    require('./grunt/config/css_mqpacker'),
    pixrem:            require('./grunt/config/pixrem'),
    imagemin:          require('./grunt/config/imagemin'),
    svgmin:            require('./grunt/config/svgmin'),
    copy:              require('./grunt/config/copy'),
    sync:              require('./grunt/config/sync'),
    clean:             require('./grunt/config/clean'),
    'html-validation': require('./grunt/config/html-validation'),
    'css-validation':  require('./grunt/config/css-validation')
  });

  require('jit-grunt')(grunt, {
    watch:             'grunt-contrib-watch',
    connect:           'grunt-contrib-connect',
    throttle:          'grunt-throttle',
    cssmin:            'grunt-contrib-cssmin',
    sass:              'grunt-contrib-sass',
    autoprefixer:      'grunt-autoprefixer',
    csscomb:           'grunt-csscomb',
    pixrem:            'grunt-pixrem',
    'css_mqpacker':    'grunt-css-mqpacker',
    coffee:            'grunt-contrib-coffee',
    requirejs:         'grunt-contrib-requirejs',
    imagemin:          'grunt-contrib-imagemin',
    svgmin:            'grunt-svgmin',
    sshexec:           'grunt-ssh',
    copy:              'grunt-contrib-copy',
    clean:             'grunt-contrib-clean',
    sync:              'grunt-sync',
    'html-validation': 'grunt-w3c-validation',
    'css-validation':  'grunt-w3c-validation'
  });

  // runners
  grunt.registerTask('default', ['connect:development', 'watch']);

  grunt.registerTask('development', [
    'sass:development',
    'cssmin:development',
    'csscomb:development',
    'css_mqpacker:development',
    'pixrem:development',
    'cssmin:development',
    'autoprefixer:development',
    'coffee:development',
    'copy:templates'
  ]);

  grunt.registerTask('production', [
    'clean',
    'development',
    'cssmin:production',
    'autoprefixer:production',
    'csscomb:production',
    'css_mqpacker:production',
    'pixrem:production',
    'cssmin:production',
    'coffee:development',
    'copy:templates',
    'requirejs',
    'imagemin',
    'svgmin',
    'copy:production'
  ]);

  grunt.registerTask('html-validation', ['html-validation']);
  grunt.registerTask('html-validation', ['css-validation']);

};