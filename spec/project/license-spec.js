describe('project license', function() {

  'use strict';

  let fs = require('fs'),
    packageJson = require('../../package.json'),
    license = readText('LICENSE.md');

  function readText(file) {

    return fs
      .readFileSync(file, 'utf8')
      .replace(/\r\n/g, '\n');

  }

  it('has author from package', function() {

      // NOTE: This is for specific licenses such as ISC.
      expect(license).toContain(packageJson.author);

  });

});
