(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .controller('MainController', MainController);

  function MainController($scope, $translate, $state, $window, $rootScope, $sce) {
      var vm = this;

      $scope.baseUrl = 'https://swap.innocoin.com/#/';

      $scope.updateIframes = function(lang) {
          var language = lang || $translate.use();

          $scope.iframe1 =  $sce.trustAsResourceUrl($scope.baseUrl + '?language=' + language + '&partner_email=partner@innocoin.com&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ETH&target_amount=1&show_info=true&theme=concrete_wall&rounded_corners=true&border=false&iframe=true');
      };

      $scope.changeLang = function(lang) {

          //var xlang = (lang === 'english') ? '' : lang;

          $rootScope.locale = lang;
          $translate.use(lang);

          $state.go('app.root', { 'locale' : lang }).then(function() {
              $scope.updateIframes(lang);
          });
      };

      $scope.updateIframes($rootScope.locale);

  }
})();
