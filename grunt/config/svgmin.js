'use strict';

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