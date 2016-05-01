describe('farm', function() {

  'use strict';

  let farm = {},
    window = {
      farm: farm
    };

  global.window = window;
  require('../src/chicken.js');

  it('has a chicken', function() {

    expect(farm.chicken).toBeDefined();

  });

  it('has a chicken with a name', function() {

    expect(farm.chicken.name).toBe('Mr. Chicken');

  });

});
