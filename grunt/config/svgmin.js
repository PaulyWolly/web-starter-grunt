'use strict';

var config = require('../config');

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.development %>/app/assets/images/',
      src: '{,*/}*.svg',
      dest: '<%= config.production %>/app/assets/images/'
    }]
  }
};