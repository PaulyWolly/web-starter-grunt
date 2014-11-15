'use strict';

module.exports = {
  coffee: {
    files: ['<%= config.development %>/app/assets/javascripts_coffee/{,**/}*.coffee'],
    tasks: ['coffee:development', 'sync']
  },
  templates: {
    files: [
      '<%= config.development %>/app/assets/**/templates/*.ejs',
      '<%= config.development %>/app/assets/**/templates/*.mustache',
      '<%= config.development %>/app/assets/**/templates/*.jsx'
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
      '{.tmp,<%= config.development %>}/app/assets/javascripts/{,**/}*.js',
      '{.tmp,<%= config.development %>}/app/assets/**/templates/{,**/}*.ejs',
      '{.tmp,<%= config.development %>}/app/assets/**/templates/{,**/}*.mustache',
      '{.tmp,<%= config.development %>}/app/assets/**/templates/{,**/}*.jsx'
    ],
    options: {
      livereload: true
    }
  }
};