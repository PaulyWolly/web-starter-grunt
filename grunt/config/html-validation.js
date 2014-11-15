'use strict';

var config = require('../config');

module.exports = {
  options: {
    reset: true,
    stoponerror: false,
    relaxerror: []
  },
  files: {
    src: ['<%= config.development %>/*.html']
  }
};