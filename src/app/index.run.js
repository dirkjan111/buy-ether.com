(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $translate, $window, $stateParams) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      $translate.use(toParams.locale);
    });


    if(!$rootScope.locale && $window.location.pathname === '/') {
      $rootScope.locale = 'english';
      $translate.use($rootScope.locale);
      $window.location = '/english';
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if($stateParams.locale && ['english','nederlands','chinese'].indexOf($stateParams.locale) !== -1){
        $rootScope.locale = $stateParams.locale;
        $translate.use($stateParams.locale);
      }

      document.body.scrollTop = document.documentElement.scrollTop = 0;

    });


  }

})();
