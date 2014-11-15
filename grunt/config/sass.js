'use strict';

var config = require('../config');

module.exports = {
  options: {
    style: 'nested',
    lineNumbers: true
  },
  development: {
    files: {
      '<%= config.development %>/app/assets/stylesheets/main.css': '<%= config.development %>/app/assets/stylesheets/main.sass'
    }
  },
  production: {
    files: {
      '<%= config.production %>/app/assets/stylesheets/main.css': '<%= config.development %>/app/assets/stylesheets/main.sass'
    }
  }
};