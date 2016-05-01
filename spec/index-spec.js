describe('farm', function() {

  'use strict';

  let window = {};

  global.window = window;

  require('../src/index.js');

  it('has a farm', function() {

    expect(window.farm).toEqual({});

  });

});
