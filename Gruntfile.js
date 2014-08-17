module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'Gruntfile.js',
//        'app/assets/javascripts/**/*.js'
        'app/assets/javascripts/main.min.js'
      ],
      options: {
        globals: {
          jQuery: true,
          console: false,
          module: true,
          document: true
        }
      }
    },

    sass: {
      options: {
        style: 'compressed',
        lineNumbers: true
      },
      dist: {
        files: {
          'app/assets/stylesheets/main.css': 'app/assets/stylesheets/main.sass'
        }
      }
    },

    autoprefixer: {
      options: {
      },
      no_dest: {
        src: 'app/assets/stylesheets/main.css'
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'app/assets/stylesheets/',
        src: ['*.css', '!*.min.css'],
        dest: 'app/assets/stylesheets/',
        ext: '.min.css'
      }
    },

    concat: {
      options: {
        findNestedDependencies: true,
        inlineText: true,
        optimize: "uglify",
        wrap: true,
        preserveLicenseComments: false
      },
      dist: {
        src: [
          'vendor/assets/bower_components/Modernizr/modernizr.js',
          'vendor/assets/bower_components/jquery/dist/jquery.js',
          'vendor/assets/bower_components/underscore/underscore.js',
          'vendor/assets/bower_components/backbone/backbone.js',
          'vendor/assets/bower_components/backbone.wreqr/lib/backbone.wreqr.js',
          'vendor/assets/bower_components/backbone.babysitter/lib/backbone.babysitter.js',
          'vendor/assets/bower_components/marionette/lib/backbone.marionette.js',
          'vendor/assets/bower_components/rivets/dist/rivets.js',
          'vendor/assets/bower_components/bootstrap/dist/js/bootstrap.js',

          'app/assets/javascripts/backbone/config.js',
          'app/assets/javascripts/backbone/app.js',

          'app/assets/javascripts/backbone/entities/header.js',

          'app/assets/javascripts/backbone/apps/initialize/initialize_app.js',

          'app/assets/javascripts/backbone/apps/layout/layout_app.js',
          'app/assets/javascripts/backbone/apps/layout/show/show_controller.js',
          'app/assets/javascripts/backbone/apps/layout/show/show_views.js',

          'app/assets/javascripts/backbone/apps/header/header_app.js',
          'app/assets/javascripts/backbone/apps/header/list/list_controller.js',
          'app/assets/javascripts/backbone/apps/header/list/list_views.js',

          'app/assets/javascripts/backbone/apps/main/main_app.js',
          'app/assets/javascripts/backbone/apps/main/show/show_controller.js',
          'app/assets/javascripts/backbone/apps/main/show/show_views.js',

          'app/assets/javascripts/backbone/apps/footer/footer_app.js',
          'app/assets/javascripts/backbone/apps/footer/show/show_controller.js',
          'app/assets/javascripts/backbone/apps/footer/show/show_views.js'
        ],
        dest: 'app/assets/javascripts/main.js'
      }
    },

    uglify: {
      build: {
        src: 'app/assets/javascripts/main.js',
        dest: 'app/assets/javascripts/main.min.js'
      }
    },

    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'app/assets/stylesheets/': ['app/assets/stylesheets/main.min.css']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-combine-media-queries');

  grunt.registerTask('compilecss', ['sass', 'autoprefixer', 'cmq', 'cssmin']);
  grunt.registerTask('compilejs', ['concat', 'uglify']);
//  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['compilecss', 'compilejs']);

};