// An example configuration file.

var HtmlScreenshotReporter = require('C:/Users/ARKA-PC/AppData/Roaming/npm/node_modules/protractor-jasmine2-html-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
  cleanDestination: false,
  showSummary: false,
  showConfiguration: false,
  reportTitle: 'sample'
});


exports.config = {

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['C:/ProtractorTest/test/name.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
 /* beforeLaunch: function(){
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },*/

  // Assign the test reporter to each running instance
  onPrepare: function(){
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
 /* afterLaunch: function(exitCode){
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }*/

};
