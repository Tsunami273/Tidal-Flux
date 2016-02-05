module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          'build/bundle.js': 'client/main.js'
        },
        options: {
          transform: ['reactify']
        }
      }
    },
    uglify: {
      views: {
        src: './build/bundle.js',
        dest: './build/bundle.min.js'
      },
    },

    cssmin: {
      dog: {
        src: 'lib/style.css',
        dest: 'lib/style.min.css',
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');


  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('default', ['browserify', 'uglify', 'cssmin'
  ]);


};