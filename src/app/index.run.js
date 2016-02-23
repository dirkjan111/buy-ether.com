(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $translate) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      $translate.use(toParams.locale);
    });

  }

})();
