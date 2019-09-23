/*
 * grunt-xml-formatter
 * https://github.com/laurenhamel/grunt-xml-formatter
 *
 * Copyright (c) 2010 Lauren Hamel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Register Grunt multi-task.
  grunt.registerMultiTask('xml-formatter', 'Beautify XML via Grunt', function () {

    // Verify that xml-formatter is available.
    try { require.resolve('xml-formatter'); }

    // Otherwise, throw an error.
    catch(error) {

      // Alert the user that xml-formatter could not be found.
      grunt.log.error('xml-formatter could not be found.',
                      'Run `npm i xml-formatter --save-dev`, then try again.');

      // Stop running.
      return;

    }

    // Load the xml-formatter.
    const format = require('xml-formatter');

    // Get all options.
    const options = this.options();

    // Format the files using XML formatter.
    this.files.forEach((file) => {

      // Get the file contents.
      const contents = grunt.file.read(file.src).trim();

      // Get the file's source xml and format it.
      const xml = format(contents, options);

      // Save the formatted xml to the destination.
      grunt.file.write(file.dest, xml);

    });

    // Log the result.
    grunt.log.ok(`${this.files.length} files formatted.`);

  });

}
