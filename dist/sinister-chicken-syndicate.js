var module,
  farm = {};

(function initialize(module) {

  'use strict';

  farm = {};

  if (module && module.exports) {

    module.exports = farm;

  }

}(module));

(function makeChicken(farm) {

  'use strict';

  farm.chicken = {
    name: 'Mr. Chicken'
  };

}(farm));

//# sourceMappingURL=sinister-chicken-syndicate.js.map
