module.exports = (grunt) => {

  // Initialize configurations.
  grunt.initConfig({
    'xml-formatter': {
      test: {
        options: {
          indentation: '  '
        },
        files: {
          'test/tmp/test.xml': 'test/fixtures/test.xml'
        }
      }
    },
    clean: {
      test: ['test/tmp']
    }
  });

  // Load tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register tasks.
  grunt.registerTask('default', [
    'clean',
    'xml-formatter:test'
  ]);

};
