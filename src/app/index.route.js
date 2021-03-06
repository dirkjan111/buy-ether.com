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
        controllerAs: 'vm',
        data: {
          english : {
            pageTitle : 'Buy Ethereum (Buy Ether /ETH)',
            pageDescription : 'Buy ethereum with bitcoin (buy ethers) on buy-ether.com. Ether (ETH) is a tradeable private asset.'
          },
          chinese : {
            pageTitle : '以太坊 - 购买 以太坊 (Ether / Ethereum)',
            pageDescription : '以太坊(ETH)是一种可交易的资产, 很快你将可以从这里购买到以太坊.'
          }
        }
      }).state('app.manual', {
          url: '/manual-ethereum-wallet-installation-and-performing-btc-eth-exchange',
          templateUrl: 'app/content/manual.html',
          controller: 'ManualController',
          controllerAs: 'vm',
          data: {
            english: {
              pageTitle: 'Ethereum wallet installation',
              pageDescription: 'Manual Ethereum wallet installation and performing ether to bitcoin exchange'
            },
            chinese: {
              pageTitle: '指南 - 以太坊(Ethereum)钱包安装教程以及使用以太交易小部件购买以太坊',
              pageDescription: '这个教程展示以太坊(Ethereum)官方钱包Mist的安装步骤以及如何使用比特币购买以太坊。'
            }
          }
        }).state('app.chart', {
          url: '/chart/btc-eth',
          templateUrl: 'app/chart/chart.html'
        });


    $urlRouterProvider.otherwise('/english');
  }

})();
