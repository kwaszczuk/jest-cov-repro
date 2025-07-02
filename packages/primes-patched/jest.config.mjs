export default {
  rootDir: ".",
  testRegex: "\\.spec\\.js$",
  collectCoverageFrom: ["*.js", "../**/*.js", "!*.spec.js"],
  coverageProvider: "v8",
  coverageReporters: ["text"],
};
