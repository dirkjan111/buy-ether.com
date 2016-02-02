(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .controller('MainController', MainController);

  function MainController($scope, $translate, $location) {
    var vm = this;


    $scope.changeLang = function(lang) {

        $translate.use(lang);

        var lang = (lang == 'cn') ? 'cn' : '';

        $location.path(lang);


    }


  }
})();
