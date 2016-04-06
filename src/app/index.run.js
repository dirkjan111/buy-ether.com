(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $translate, $state, $window, $location, $stateParams) {

    $rootScope.test = false;

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.locale = 'english';
    $rootScope.canonical = $location.absUrl();
    $rootScope.date = new Date();


    var abs_url = 'https://www.buy-ether.com';

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      $translate.use(toParams.locale);

    });


    /*if(!$rootScope.locale || $window.location.pathname === '/en') {
      $rootScope.locale = 'english';
      $translate.use($rootScope.locale);
      $window.location = '/';
    }

    if(!$rootScope.locale && $window.location.pathname === '/cn') {
      $rootScope.locale = 'chinese';
      $translate.use($rootScope.locale);
      $window.location = '/chinese';
    }
*/

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if($stateParams.locale && ['english','nederlands','chinese'].indexOf($stateParams.locale) !== -1){
        $rootScope.locale = $stateParams.locale;
        $translate.use($stateParams.locale);
      }

      $rootScope.canonical = $location.absUrl() === abs_url + '/english' ? abs_url : $location.absUrl();

      document.body.scrollTop = document.documentElement.scrollTop = 0;

    });


  }

})();
