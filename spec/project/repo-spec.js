describe('project repo', function() {

  'use strict';

  let packageJson = require('../../package.json'),
    bowerJson = require('../../bower.json'),
    fs = require('fs'),
    userName = 'lewismoten',
    repositoryName = 'sinister-chicken-syndicate',
    projectUrl = 'https://github.com/' + userName + '/' + repositoryName;

  describe('package', function() {

    it('specifies repo', function() {

      expect(packageJson.repository.url).toBe('git+' + projectUrl + '.git');

    });

    it('specifies bugs', function() {

      expect(packageJson.bugs.url).toBe(projectUrl + '/issues');

    });

    it('specifies home page', function() {

      expect(packageJson.homepage).toBe(projectUrl + '#readme');

    });

    it('contains repo name in main', function() {

      expect(packageJson.main).toBe('dist/' + repositoryName + '.js');

    });

  });


});
