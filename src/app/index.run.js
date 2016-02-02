(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $translate) {

    //$log.debug('runBlock end');


    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $translate.use(toParams.locale);
    });

  }

})();
