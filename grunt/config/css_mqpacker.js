'use strict';

var config = require('../config');

module.exports = {
  development: {
    options: {
      map: true
    },
    main: {
      expand: true,
      cwd: '<%= config.development %>/app/assets/stylesheets/',
      src: '*.css',
      dest: '<%= config.development %>/app/assets/stylesheets/'
    }
  },
  production: {
    options: {
      map: true
    },
    main: {
      expand: true,
      cwd: '<%= config.production %>/app/assets/stylesheets/',
      src: '*.css',
      dest: '<%= config.production %>/app/assets/stylesheets/'
    }
  }
};