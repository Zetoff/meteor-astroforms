Package.describe({
  name: 'zetoff:astroforms',
  version: '0.0.1',
  summary: 'Forms API for Meteor Astronomy',
  git: 'https://github.com/jagi/meteor-astronomy-validators.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'es5-shim',
    'accounts-base',
    'jagi:astronomy@2.0.0-rc.8',
    'jagi:reactive-map@2.0.0',
    'underscore',
    'check',
  ], ['client', 'server']);

  api.imply('jagi:astronomy');

  api.mainModule('lib/main.js', ['client', 'server']);
});
