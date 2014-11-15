'use strict';

var config = require('../config');

module.exports = {
  'templates': {
    files: [
      {
        expand: true,
        cwd: '<%= config.development %>/app/assets/javascripts_coffee',
        src: ['**/*.mustache', '**/*.ejs', '**/*.jsx'],
        dest: '<%= config.development %>/app/assets/javascripts/',
        filter: 'isFile'
      }
    ]
  },
  production: {
    files: [
      // copy html files
      {
        expand: true,
        flatten: true,
        src: ['<%= config.development %>/*'],
        dest: '<%= config.production %>/',
        filter: 'isFile'
      },
      // copy requirejs
      {
        expand: true,
        flatten: true,
        src: ['<%= config.development %>/vendor/assets/bower_components/requirejs/require.js'],
        dest: '<%= config.production %>/vendor/assets/bower_components/requirejs/'
      },
      // copy html5shim
      {
        expand: true,
        flatten: true,
        src: ['<%= config.development %>/vendor/assets/bower_components/html5shiv/dist/html5shiv.min.js'],
        dest: '<%= config.production %>/vendor/assets/bower_components/html5shiv/dist/'
      },
      // copy respond
      {
        expand: true,
        flatten: true,
        src: ['<%= config.development %>/vendor/assets/bower_components/respond/dest/respond.min.js'],
        dest: '<%= config.production %>/vendor/assets/bower_components/respond/dest/'
      },
      // copy fonts
      {
        expand: true,
        flatten: false,
        cwd: '<%= config.development %>/app/assets/fonts/',
        src: ['**/*'],
        dest: '<%= config.production %>/app/assets/fonts/'
      }
    ]
  }
};