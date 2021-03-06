// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  baseUrl: 'lib',
  paths: {
    scheduler: '../scheduler',
    lib: '../lib'
  },
  packages: [{
    name: 'moment',
    location: './../../node_modules/moment',
    main: 'moment'
  }]
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['scheduler/main']);
