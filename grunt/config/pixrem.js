'use strict';

module.exports = {
  options: {
    rootvalue: '50%',
    replace: false
  },
  development: {
    src: '<%= config.development %>/app/assets/stylesheets/main.css',
    dest: '<%= config.development %>/app/assets/stylesheets/main.css'
  },
  production: {
    src: '<%= config.production %>/app/assets/stylesheets/main.css',
    dest: '<%= config.production %>/app/assets/stylesheets/main.css'
  }
};