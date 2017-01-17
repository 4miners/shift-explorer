'use strict';

angular.module ('lisk_explorer.currency').controller ('CurrencyController',
  function ($scope, $rootScope) {
    $rootScope.currency.symbol = localStorage && localStorage.getItem ('shift_explorer-currency') || 'SHIFT';

    $scope.setCurrency = function(currency) {
      $rootScope.currency.symbol = currency;
      if (localStorage) {
        localStorage.setItem ('shift_explorer-currency', currency);
      }
    };
  });
