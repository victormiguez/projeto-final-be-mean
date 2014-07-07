'use strict';

var shopsCtrl = {
  index: function ($scope, $http) {
    $scope.lojas = [];
    var url = '/api/shops';

    $http.get(url)
    .success(function(data){
      $scope.lojas = data;
    })
    .error(function(err){
      console.log('Error: ', err);
    });
  },
  create: function ($scope, $http) {
    var url = '/api/shops/';

    $scope.create = function(loja){
      var method = 'POST';
      $http({
        method: method,
        url: url,
        data: loja
      })
      .success(function(data){
        $scope.scsMsg = 'Loja ' + loja.name + ' criada com sucesso';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.errMsg = 'Error:  ' + err;
      });
    }
  },
  show: function ($scope, $http, $routeParams, $location) {
    var id = $routeParams.id;
    var url = '/api/shops/'+id;

    $http.get(url)
    .success(function(data){
      $scope.loja = data;
    })
    .error(function(err){
      console.log('Error: ', err);
      $scope.msg = 'Error:  ' + err;
    });

    $scope.remove = function(loja){
      var method = 'DELETE';
      var query = {
        _id: loja._id
      };

      var http_settings = {
        method: method,
        url: url,
        data: query
      };
      $http(http_settings)
      .success(function(data){
        $location.path('/');
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.msg = 'Error:  ' + err;
      });
    }
  },
  edit: function ($scope, $http, $routeParams) {
    var id = $routeParams.id;
    var url = '/api/shops/'+id;
    var method = 'GET';
    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.loja = data;
    })
    .error(function(err){
      console.log('Error: ', err);
      $scope.msg = 'Error:  ' + err;
    });

    $scope.update = function(loja){    
      var method = 'PUT';
      var http_settings = {
        method: method,
        url: url,
        data: loja
      };
      $http(http_settings)
      .success(function(data){
        $scope.scsMsg = 'Loja ' + loja.name + ' alterada com sucesso';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.errMsg = 'Error:  ' + err;
      });
    }
  }
}

module.exports = shopsCtrl;