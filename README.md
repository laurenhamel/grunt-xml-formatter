# grunt-xml-formatter

> A Grunt wrapper for [xml-formatter](https://www.npmjs.com/package/xml-formatter)


## Getting Started

If you haven't used [Grunt](https://gruntjs.com) before, be sure to check out the [Getting Started](https://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](https://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-xml-formatter xml-formatter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-xml-formatter');
```

## Usage

Run this task with the `grunt xml-formatter` command.

## Examples

Add a section named `xml-formatter` to the data object passed into `grunt.initConfig()`, then pass in your files object or array.

**Beautify XML file(s)**

```js
grunt.initConfig({
  'xml-formatter': {
    target: {
      options: {
        indentation: '  ',
        stripComments: true,
        collapseContent: false,
        debug: false
      },
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['**/*.xml']
        dest: 'dest/'
      }]
    }
  }
});
```

## Options

This grunt task uses the native options for [xml-formatter](https://www.npmjs.com/package/xml-formatter#options).
