(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $translate, $state, $window, $stateParams) {


    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
   // $rootScope.locale = 'english';


    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      $translate.use(toParams.locale);
    });


    if(!$rootScope.locale && $window.location.pathname === '/' || $window.location.pathname === '/en') {
      $rootScope.locale = 'english';
      $translate.use($rootScope.locale);
      $window.location = '/english';
    }

    if(!$rootScope.locale && $window.location.pathname === '/cn') {
      $rootScope.locale = 'chinese';
      $translate.use($rootScope.locale);
      $window.location = '/chinese';
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
