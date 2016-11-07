(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .controller('ManualController', ManualController);

  function ManualController($scope,$rootScope, $translate, $state, $sce) {

      var vm = this;

      vm.baseSwapUrl = 'https://swap.innocoin.com/#/';

      vm.max = 2.5;

      $scope.updateIframes = function(lang) {
          var language = lang || $translate.use();
          $scope.iframe1 =  $sce.trustAsResourceUrl(vm.baseSwapUrl + '?language=' + language + '&partner_email=partner@innocoin.com&partner_name=buy-ether.com&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ETH&target_amount=2.5&show_info=true&theme=random_grey_variations&rounded_corners=true&border=false&iframe=true');
      };

      $scope.changeLang = function(lang) {
          console.log(0,lang);
          $rootScope.locale = lang;
          $translate.use(lang);

          $state.go('app.manual', { 'locale' : lang }).then(function() {
              $scope.updateIframes(lang);
          });
      };

      $scope.updateIframes($rootScope.locale);
  }
})();
