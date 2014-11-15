'use strict';

var config = require('../config');

module.exports = {
  development: {
    options: {
      port: 3000,
      base: './'
    }
  },
  production: {
    options: {
      port: 8000,
      base: './'
    }
  }
};