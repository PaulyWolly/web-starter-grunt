'use strict';

module.exports = {
  production: {
    src: '<%= config.production %>/app/assets/javascripts/require_main.js',
    dest: '<%= config.production %>/app/assets/javascripts/require_main.js'
  }
};