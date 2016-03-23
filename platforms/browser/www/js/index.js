var app = angular.module('cotadim', []);
    app.controller('cotacao', function($scope, $http) {
      $http.get("http://api.fixer.io/latest?base=BRL").then(function(result) {
          $scope.dolar = result.data.rates.USD;
          $scope.euro  = result.data.rates.EUR;
          $scope.cad   = result.data.rates.CAD;
      });
    });