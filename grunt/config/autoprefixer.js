'use strict';

var config = require('../config');

module.exports = {
  development: {
    src: '<%= config.development %>/app/assets/stylesheets/main.css',
    dest: '<%= config.development %>/app/assets/stylesheets/main.css'
  },
  production: {
    src: '<%= config.production %>/app/assets/stylesheets/main.css',
    dest: '<%= config.production %>/app/assets/stylesheets/main.css'
  }
};