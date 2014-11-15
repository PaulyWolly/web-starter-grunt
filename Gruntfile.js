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

  // server
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-throttle');

  // stylesheets
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-pixrem');
  grunt.loadNpmTasks('grunt-css-mqpacker');

  // javascripts
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // images
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

  // deployment
  grunt.loadNpmTasks('grunt-ssh');

  // files
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sync');

  // validation
  grunt.loadNpmTasks('grunt-w3c-validation');

  // runners
  grunt.registerTask('default', [
    'connect:development',
    // 'open:development',
    'watch'
  ]);

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
    // clean
    'clean',
    // stylesheets
    'sass:development',
    'cssmin:development',
    'csscomb:development',
    'css_mqpacker:development',
    'pixrem:development',
    'cssmin:development',
    'autoprefixer:development',

    'cssmin:production',
    'autoprefixer:development',
    'csscomb:production',
    'css_mqpacker:production',
    'pixrem:production',
    'cssmin:production',
    'autoprefixer:production',
    // javascripts
    'coffee:development',
    'copy:templates',
    'requirejs',
    'uglify:production',
    //images
    'imagemin',
    'svgmin',
    // copy
    'copy:production'
  ]);

  grunt.registerTask('deploy', [
    'sshexec:deploy'
  ]);

  grunt.registerTask('validation', [
    'html-validation',
    'css-validation'
  ]);

};