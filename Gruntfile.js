module.exports = function(grunt) {

  'use strict';
  var config = require('./grunt/config');

  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    watch:             require('./grunt/config/watch'),
    connect:           require('./grunt/config/connect'),
    open:              require('./grunt/config/open'),
    throttle:          require('./grunt/config/throttle'),
    coffee:            require('./grunt/config/coffee'),
    requirejs:         require('./grunt/config/requirejs'),
    uglify:            require('./grunt/config/uglify'),
    sass:              require('./grunt/config/sass'),
    csscomb:           require('./grunt/config/csscomb'),
    autoprefixer:      require('./grunt/config/autoprefixer'),
    cssmin:            require('./grunt/config/cssmin'),
    'css_mqpacker':    require('./grunt/config/css_mqpacker'),
    pixrem:            require('./grunt/config/pixrem'),
    imagemin:          require('./grunt/config/imagemin'),
    svgmin:            require('./grunt/config/svgmin'),
    sshexec:           require('./grunt/config/sshexec'),
    copy:              require('./grunt/config/copy'),
    sync:              require('./grunt/config/sync'),
    clean:             require('./grunt/config/clean'),
    'html-validation': require('./grunt/config/html-validation'),
    'css-validation':  require('./grunt/config/css-validation')
  });

  require('jit-grunt')(grunt, {
    watch:             'grunt-contrib-watch',
    connect:           'grunt-contrib-connect',
    open:              'grunt-open',
    throttle:          'grunt-throttle',
    cssmin:            'grunt-contrib-cssmin',
    sass:              'grunt-contrib-sass',
    autoprefixer:      'grunt-autoprefixer',
    csscomb:           'grunt-csscomb',
    pixrem:            'grunt-pixrem',
    'css_mqpacker':    'grunt-css-mqpacker',
    uglify:            'grunt-contrib-uglify',
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
    // stylesheets
    'sass:development',
    'cssmin:development',
    'csscomb:development',
    'css_mqpacker:development',
    'pixrem:development',
    'cssmin:development',
    'autoprefixer:development',
    // javascripts
    'coffee:development',
    'copy:templates'
  ]);

  grunt.registerTask('production', [
    // clean: production
    'clean',
    // stylesheets: development
    'sass:development',
    'cssmin:development',
    'csscomb:development',
    'css_mqpacker:development',
    'pixrem:development',
    'cssmin:development',
    'autoprefixer:development',
    // stylesheets: production
    'cssmin:production',
    'autoprefixer:development',
    'csscomb:production',
    'css_mqpacker:production',
    'pixrem:production',
    'cssmin:production',
    'autoprefixer:production',
    // javascripts: development
    'coffee:development',
    'copy:templates',
    // javascripts: production
    'requirejs',
    'uglify:production',
    //images: production
    'imagemin',
    'svgmin',
    // copy: production
    'copy:production'
  ]);

  grunt.registerTask('deploy', ['sshexec:deploy']);
  grunt.registerTask('html-validation', ['html-validation']);
  grunt.registerTask('html-validation', ['css-validation']);

};