'use strict';

//grunt.file.readJSON('../../secret.json'),

module.exports = {
  deploy: {
    command: [
      '<%= secret.staging.path %>',
      'git reset --hard',
      'git pull origin master'
    ].join(' && '),
    options: {
      host: '<%= secret.staging.host %>',
      username: '<%= secret.staging.username %>',
      password: '<%= secret.staging.password %>'
    }
  }
};