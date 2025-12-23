const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function writeAllureEnvironment(browserName = 'Chrome') {
  const allureResultsPath = path.join(__dirname, '..', '..', 'allure-results');

  if (!fs.existsSync(allureResultsPath)) {
    fs.mkdirSync(allureResultsPath);
  }
  
  const envData = `
    Browser=${browserName}
    OS=${process.platform}
    Node.Version=${process.version}
    Cypress.Version=${require('cypress/package.json').version}
`;

  fs.writeFileSync(path.join(allureResultsPath, 'environment.properties'), envData);
  console.log('✅ Environment file generated for Allure Report');
}

module.exports = { writeAllureEnvironment };
