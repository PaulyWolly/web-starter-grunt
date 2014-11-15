'use strict';

var config = require('../config');

module.exports = {
  development: {
    dynamic_mappings: {
      expand: true,
      cwd: '<%= config.development %>/app/assets/stylesheets/',
      src: ['*.css'],
      dest: '<%= config.development %>/app/assets/stylesheets/',
      ext: '.css'
    }
  },
  production: {
    dynamic_mappings: {
      expand: true,
      cwd: '<%= config.production %>/app/assets/stylesheets/',
      src: ['*.css'],
      dest: '<%= config.production %>/app/assets/stylesheets/',
      ext: '.css'
    }
  }
};