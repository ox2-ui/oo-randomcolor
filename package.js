Package.describe({
  name: 'ox2:randomcolor',
  summary: 'TESTING_DO_NOT_USE randomColor library',
  version: '0.2.0_1',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/randomcolor.js', C);
  api.addFiles('lib/export.js', C);
  api.export('randomColor');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:randomcolor');
  api.addFiles('tests/package-tests.js');
});
