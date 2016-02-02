(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      abstract: true,
      url: '/{locale}',
      template: '<ui-view/>'
    })
      .state('app.root', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/en');
  }

})();
