const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const { writeAllureEnvironment } = require('./cypress/support/environmentHelper');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      const browserName = config.browser?.name || 'Chrome';
      writeAllureEnvironment(browserName);
      return config
    },
    baseUrl: 'https://www.saucedemo.com',
  }
})