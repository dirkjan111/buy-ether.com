(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .controller('ManualController', ManualController);

  function ManualController($scope,$rootScope, $translate, $state, $sce, $http, myConfig) {

      var vm = this;

      vm.max = myConfig.maxInit;

      $scope.updateIframes = function(lang) {
          var language = lang || $translate.use();
          vm.iframe1 =  $sce.trustAsResourceUrl(myConfig.baseSwapUrl + '?language=' + language + '&partner_email=partner@innocoin.com&partner_name=buy-ether.com&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ETH&target_amount=2.5&show_info=true&theme=random_grey_variations&rounded_corners=true&border=false&iframe=true');
          vm.iframe3 =  $sce.trustAsResourceUrl(myConfig.baseUrl + '/ticker#scheme=dark&bgcolor=#1A486B&opacity=1&margin=1.25');
      };

      $http.get(myConfig.api).then(function(response) {
          vm.max = response.data.conversions.BTC_ETH.maxSource;
      });

      $scope.changeLang = function(lang) {
          $rootScope.locale = lang;
          $translate.use(lang);

          $state.go('app.manual', { 'locale' : lang }).then(function() {
              $scope.updateIframes(lang);
          });
      };

      $scope.updateIframes($rootScope.locale);
  }
})();
