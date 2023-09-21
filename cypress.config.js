const { defineConfig } = require("cypress");

module.exports = defineConfig({
   viewportHeight: 1080,
   viewportWidth: 1980,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl:'https://opensource-demo.orangehrmlive.com/web/index.php',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
