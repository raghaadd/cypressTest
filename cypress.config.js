const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vpv4sr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
