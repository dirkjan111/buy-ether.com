(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .controller('ManualController', ManualController);

  function ManualController($scope, $sce) {
      var manual = this;

      $scope.baseUrl = 'https://swap.innocoin.com/#/';

      $scope.max = 2.5;

      $scope.iframe1 =  $sce.trustAsResourceUrl($scope.baseUrl + '?language=english&partner_email=partner@innocoin.com&partner_name=buy-ether.com-manual&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ETH&target_amount=1&show_info=true&theme=concrete_wall&rounded_corners=true&border=false&iframe=true');
      $scope.iframe2 =  $sce.trustAsResourceUrl($scope.baseUrl + '?language=chinese&partner_email=partner@innocoin.com&partner_name=buy-ether.com-manual&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ETH&target_amount=1&show_info=true&theme=random_grey_variations&rounded_corners=true&border=false&iframe=true');


  }
})();
