module.exports = {
  default: {
    formatOptions: { snippetInterface: 'async-await' },
    paths: ['specs/features/**/*.feature'],
    require: ['specs/features/step_definitions/**/*.ts'],
    requireModule: ['tsx'],
    format: ['html:reports/cucumber-report.html']
  }
};