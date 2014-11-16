'use strict';

module.exports = {
  coffee: {
    files: ['<%= config.development %>/app/assets/javascripts_coffee/{,**/}*.coffee'],
    tasks: ['coffee:development', 'sync']
  },
  templates: {
    files: [
      '<%= config.development %>/app/assets/javascripts_coffee/**/*.ejs',
      '<%= config.development %>/app/assets/javascripts_coffee/**/*.mustache',
      '<%= config.development %>/app/assets/javascripts_coffee/**/*.jsx'
    ],
    tasks: ['sync']
  },
  css: {
    files: ['<%= config.development %>/app/assets/stylesheets/**/*.sass'],
    tasks: ['sass:development', 'cssmin:development', 'autoprefixer:development']
  },
  livereload: {
    files: [
      '{,**/}*.html',
      '{.tmp,<%= config.development %>}/app/assets/stylesheets/{,**/}*.sass',
      '{.tmp,<%= config.development %>}/app/assets//javascripts_coffee/{,**/}*.coffee',
      '{.tmp,<%= config.development %>}/app/assets/javascripts_coffee/**/{,**/}*.ejs',
      '{.tmp,<%= config.development %>}/app/assets/javascripts_coffee/**/{,**/}*.mustache',
      '{.tmp,<%= config.development %>}/app/assets/javascripts_coffee/**/{,**/}*.jsx'
    ],
    options: {
      livereload: true
    }
  }
};