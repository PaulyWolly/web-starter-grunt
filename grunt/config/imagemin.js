'use strict';

var config = require('../config');

module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: '<%= config.development %>/app/assets/images/',
      src: ['**/*.{png,jpg,gif,svg,ico}'],
      dest: '<%= config.production %>/app/assets/images/'
    }]
  }
};