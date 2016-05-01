describe('project license', function() {

  'use strict';

  let fs = require('fs'),
    config = require('../config.json'),
    packageJson = require('../../package.json'),
    readme = readText('README.md'),
    license = readText('LICENSE.md');

  function readText(file) {

    return fs
      .readFileSync(file, 'utf8')
      .replace(/\r\n/g, '\n');

  }

  it('has author from package', function() {

    expect(license).toContain(packageJson.author);

  });

  describe('Read me', function() {

    it('is matches quoted license file', function() {

      // NOTE: This is for specific licenses such as ISC.

      let quotedLicense = '\n ' + license.replace(/\n(\S)/g, '\n $1');

      expect(readme).toContain(quotedLicense);

    });

  });


});
