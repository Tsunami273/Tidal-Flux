module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      views: {
        src: './build/bundle.js',
        dest: './build/production.min.js'
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');



  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('default', ['uglify', 'cssmin'
  ]);

  grunt.registerTask('build', ['uglify', 'cssmin'
  ]);

};