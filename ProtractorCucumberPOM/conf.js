


exports.config = {
    
    framework: 'custom',
    directConnect: true,
    getPageTimeout: 120000,
    allScriptsTimeout: 500000,
    capabilities: {
      browserName: 'chrome'
    },
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
      "Features/*.feature" 
    ],

    baseURL: 'http://localhost:8080/', 
    
    onComplete: () => {
      var reporter = require('cucumber-html-reporter');
      var options = {
        theme: 'bootstrap',
        jsonFile: './results.json',
        output: './results.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        },
        output: './report/cucumber_report.html',
      };
       reporter.generate(options);
     },


    cucumberOpts: {
      
      require: [
        "C:/ProtractorCucumberPOM/Features/StepDef/*.js"
      ],

      format: 'json:results.json'
    }
  };