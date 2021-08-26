const baseConfig = require("../../jest.config");
const package = require("./package.json");

module.exports = {
  ...baseConfig,
  // Name should be displayed on Test Report
  displayName: "State Machine",
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "@operational-transformation/utils": "<rootDir>/packages/utils/src",
  },
  // Name of the package
  name: package.name,
  // The root directory that Jest should scan for tests and modules within
  rootDir: "../..",
  // The glob patterns Jest uses to detect test files
  testMatch: [`<rootDir>/packages/${package.rootDir}/__tests__/*.[jt]s?(x)`],
};
