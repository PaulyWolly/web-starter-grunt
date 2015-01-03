'use strict';

module.exports = {
  options: {
    loadPath: require('node-bourbon').with(['<%= config.development %>/vendor/assets/bower_components', '<%= config.development %>/vendor/assets/components']),
    style: 'nested',
    lineNumbers: true
  },
  development: {
    files: {
      '<%= config.development %>/app/assets/stylesheets/main.css': '<%= config.development %>/app/assets/stylesheets/main.scss'
    }
  },
  production: {
    files: {
      '<%= config.production %>/app/assets/stylesheets/main.css': '<%= config.development %>/app/assets/stylesheets/main.scss'
    }
  }
};