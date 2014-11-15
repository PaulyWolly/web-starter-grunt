'use strict';

var config = require('../config');

module.exports = {
  development: {
    expand: true,
    cwd: '<%= config.development %>/app/assets/stylesheets/',
    src: ['*.css', '!*.min.css'],
    dest: '<%= config.development %>/app/assets/stylesheets/',
    ext: '.css',
    keepSpecialComments: true
  },
  production: {
    expand: true,
    cwd: '<%= config.development %>/app/assets/stylesheets/',
    src: ['*.css', '!*.min.css'],
    dest: '<%= config.production %>/app/assets/stylesheets/',
    ext: '.css',
    keepSpecialComments: false
  }
};