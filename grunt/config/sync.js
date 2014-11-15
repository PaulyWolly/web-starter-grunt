'use strict';

module.exports = {
  main: {
    files: [{
      cwd: '<%= config.development %>/app/assets/javascripts_coffee/',
      src: [
        '**/*.ejs',
        '**/*.mustache',
        '**/*.jsx'
      ],
      dest: '<%= config.development %>/app/assets/javascripts/',
    }],
    pretend: false,
    verbose: true
  }
};