'use strict';

module.exports = {
  development: {
    expand: true,
    flatten: false,
    bare: true,
    cwd: '<%= config.development %>/app/assets/javascripts_coffee/',
    src: ['**/*.coffee', '*.coffee'],
    dest: '<%= config.development %>/app/assets/javascripts/',
    ext: '.js'
  },
  require_config: {
    flatten: true,
    options: {
      bare: true
    },
    cwd: './',
    src: ['<%= config.development %>/app/assets/javascripts_coffee/require_main.coffee'],
    dest: '<%= config.development %>/app/assets/javascripts/require_main.js'
  }
};