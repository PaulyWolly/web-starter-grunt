'use strict';

module.exports = {
  development: {
    options: {
      bare: true
    },
    expand: true,
    flatten: false,
    cwd: '<%= config.development %>/app/assets/javascripts_coffee/',
    src: ['**/*.coffee', '*.coffee'],
    dest: '<%= config.development %>/app/assets/javascripts/',
    ext: '.js'
  },
  require_config: {
    options: {
      bare: true
    },
    flatten: true,
    cwd: './',
    src: ['<%= config.development %>/app/assets/javascripts_coffee/require_main.coffee'],
    dest: '<%= config.development %>/app/assets/javascripts/require_main.js'
  }
};