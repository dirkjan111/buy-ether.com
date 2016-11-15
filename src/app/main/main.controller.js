(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .controller('MainController', MainController);

  function MainController($scope, $translate, $state, $rootScope, $sce, myConfig) {

      var vm = this;

      vm.updateIframes = function(lang) {
          var language = lang || $translate.use();
          vm.iframe1 =  $sce.trustAsResourceUrl(myConfig.baseSwapUrl + '?language=' + language + '&partner_email=partner@innocoin.com&partner_name=buy-ether.com&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ETH&target_amount=2.5&show_info=true&theme=brushed_alu&rounded_corners=true&border=false&iframe=true');
          vm.iframe2 =  $sce.trustAsResourceUrl(myConfig.baseUrl + '/trades#language=' + language + '&bgcolor=#fff&scheme=light&hidetitle=true&iframe=true&sidepadding=true&overflow=hidden&results=12');
          vm.iframe3 =  $sce.trustAsResourceUrl(myConfig.baseUrl + '/ticker#scheme=dark&bgcolor=#1A486B&opacity=1&margin=1.25');
      };

      $scope.changeLang = function(lang) {

          $rootScope.locale = lang;
          $translate.use(lang);

          $state.go('app.root', { 'locale' : lang }).then(function() {
              vm.updateIframes(lang);
          });
      };

      vm.updateIframes($rootScope.locale);

  }
})();
