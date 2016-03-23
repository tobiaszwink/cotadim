var app = angular.module('myApp', []);
    app.controller('cotacao', function($scope, $http) {
      $http.get("http://developers.agenciaideias.com.br/cotacoes/json").then(function(result) {
          $scope.dolar = result.data.dolar.cotacao;
          $scope.euro  = result.data.euro.cotacao;
      });
    });