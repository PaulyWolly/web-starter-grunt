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
        tasks: ['coffee:development']
      },
      templates: {
        files: ['<%= config.development %>}/app/assets/**/templates/*.ejs'],
        tasks: []
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

    // coffeescript
    coffee: {
      development: {
        expand: true,
        flatten: false,
        bare: true,
        cwd: '<%= config.development %>/app/assets/javascripts_coffee/',
        src: ['**/*.coffee', '*.coffee'],
        dest: '<%= config.development %>/app/assets/javascripts/',
        ext: '.js'
      },
      require_config: {
        flatten: true,
        options: {
          bare: true
        },
        cwd: './',
        src: ['<%= config.development %>/app/assets/javascripts_coffee/require_main.coffee'],
        dest: '<%= config.development %>/app/assets/javascripts/require_main.js'
      }
    },

    // requirejs
    requirejs: {
      compile: {
        options: {
          mainConfigFile: "<%= config.development %>/app/assets/javascripts/require_main.js",
          baseUrl: "<%= config.development %>/app/assets/javascripts/application",
          name: "../require_main",
          out: "<%= config.production %>/app/assets/javascripts/require_main.js",
          findNestedDependencies: true,
          inlineText: true,
          optimize: "uglify",
          wrap: true,
          wrapShim: true,
          preserveLicenseComments: false,
          done: function(done, output) {
            var duplicates = require('rjs-build-analysis').duplicates(output);
            if (duplicates.length > 0) {
              grunt.log.subhead('Duplicates found in requirejs build:');
              grunt.log.warn(duplicates);
              return done(new Error('r.js built duplicate modules, please check the excludes option.'));
            }
            done();
          }
        }
      }
    },

    // uglify
    uglify: {
      production: {
        src: '<%= config.production %>/app/assets/javascripts/require_main.js',
        dest: '<%= config.production %>/app/assets/javascripts/require_main.js'
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

    // imagemin
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

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
    'pixrem:development',
    // javascripts
    'coffee:development'
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
    'coffee:development',
    'requirejs',
    'uglify:production',
    // images
    'imagemin'
  ]);

};