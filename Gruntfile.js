module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['src/*.js'
      ],
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['spec/**/*.js']
      }
    },

    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['broserify', 'mochaTest'],
      },
      options: {
        spawn: false,
        event: 'all',
      },
    },
  });

  // Don't worry about this one - it just works. You'll see when you run `grunt`.
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('default', ['watch']);

};
