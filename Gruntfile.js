var mountFolder = function (connect, dir) {
  'use strict';
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

  'use strict';
  var config = {
    development: 'development',
    production: 'production',
    test: 'test'
  };

  grunt.initConfig({

    config: config,

    pkg: grunt.file.readJSON('package.json'),

    // watch
    watch: {
      coffee: {
        files: ['<%= config.development %>/app/assets/javascripts_coffee/{,**/}*.coffee'],
        tasks: ['coffee:glob_to_multiple','coffee:amdConfig', 'shell:mocha-phantomjs']
      },
      templates: {
        files: ['<%= config.development %>}/app/assets/**/templates/*.ejs'],
        tasks: ['copy:templates', 'coffe:glob_to_multiple']
      },
      css: {
        files: ['<%= config.development %>/app/assets/stylesheets/**/*.sass'],
        tasks: ['sass:development', 'autoprefixer:development', 'cssmin:development']
      },
      livereload: {
        files: [
          '{,**/}*.html',
          '{.tmp,<%= config.development %>}/app/assets/stylesheets/{,**/}*.sass',
          '{.tmp,<%= config.development %>}/app/assets/javascripts/{,**/}*.js',
          '{.tmp,<%= config.development %>}/app/assets/**/templates/{,**/}*.ejs'],
        options: {
          livereload: true
        }
      }
    },

    // connect server
    connect: {
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
    },

    // open
    open: {
      development: {
        path: 'http://localhost:3000/<%= config.development %>/',
        app: 'Google Chrome'
      },
      production: {
        path: 'http://localhost:8000/<%= config.production %>/',
        app: 'Google Chrome'
      }
    },

    // sass
    sass: {
      options: {
        style: 'nested',
        lineNumbers: true
      },
      development: {
        files: {
          '<%= config.development %>/app/assets/stylesheets/main.css': '<%= config.development %>/app/assets/stylesheets/main.sass',
        }
      },
      production: {
        files: {
          '<%= config.production %>/app/assets/stylesheets/main.css': '<%= config.development %>/app/assets/stylesheets/main.sass',
        }
      }
    },

    // autoprefixer
    autoprefixer: {
      development: {
        options: {
        },
        no_dest: {
          src: '<%= config.development %>/app/assets/stylesheets/main.css'
        }
      },
      production: {
        options: {
        },
        no_dest: {
          src: '<%= config.production %>/app/assets/stylesheets/main.css'
        }
      }
    },

    // cssmin
    cssmin: {
      development: {
        expand: true,
        cwd: '<%= config.development %>/app/assets/stylesheets/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= config.development %>/app/assets/stylesheets/',
        ext: '.css',
        keepSpecialComments: true
      },
      production: {
        expand: true,
        cwd: '<%= config.development %>/app/assets/stylesheets/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= config.production %>/app/assets/stylesheets/',
        ext: '.css',
        keepSpecialComments: false
      }
    },

    // cmq
    cmq: {
      development: {
        files: {
          '<%= config.development %>/app/assets/stylesheets/': ['<%= config.development %>/app/assets/stylesheets/main.css']
        }
      },
      production: {
        files: {
          '<%= config.production %>/app/assets/stylesheets/': ['<%= config.production %>/app/assets/stylesheets/main.css']
        }
      }
    },

    // pixrem
    pixrem: {
      options: {
        rootvalue: '50%',
        replace: false
      },
      development: {
        src: '<%= config.development %>/app/assets/stylesheets/main.css',
        dest: '<%= config.development %>/app/assets/stylesheets/main.css'
      },
      production: {
        src: '<%= config.production %>/app/assets/stylesheets/main.css',
        dest: '<%= config.production %>/app/assets/stylesheets/main.css'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= config.development %>/app/assets/images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: '<%= config.production %>/app/assets/images/'
        }]
      }
    }


  });

  // server
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  // stylesheets
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-pixrem');

  // javascripts
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // images
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  // runners
  grunt.registerTask('default', [
    'connect:development',
    'open:development',
    'watch'
  ]);

  grunt.registerTask('development', [
    // stylesheets
    'sass:development',
    'autoprefixer:development',
    'cssmin:development',
    'cmq:development',
    'pixrem:development'
    // javascripts
  ]);

  grunt.registerTask('production', [
    // stylesheets
    'sass:development',
    'autoprefixer:development',
    'cssmin:development',
    'sass:production',
    'autoprefixer:production',
    'cssmin:production',
    'cmq:production',
    'pixrem:production',
    // javascripts
    // images
    'imagemin'
  ]);

};