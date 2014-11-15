'use strict';

var config = require('../config');

module.exports = {
  development: {
    path: 'http://localhost:3000/<%= config.development %>/',
    app: 'Google Chrome'
  },
  production: {
    path: 'http://localhost:8000/<%= config.production %>/',
    app: 'Google Chrome'
  }
};