'use strict';

var beersCtrl = {
  index: function ($scope, $http) {
    $scope.reverse = false;
    $scope.predicate = 'name';
    $scope.cervejas = [];
    var url = '/api/beers';

    $http.get(url)
    .success(function(data){
      $scope.cervejas = data;
      console.log('Cervejas', $scope.cervejas);
    })
    .error(function(err){
      console.log('Error: ', err);
    });

    $scope.orderBy = function(predicate){
      $scope.predicate = predicate;
      $scope.reverse = !$scope.reverse;
    }
  },
  create: function ($scope, $http) {
    var url = '/api/beers/';

    $scope.create = function(cerveja){
      var method = 'POST';
      $http({
        method: method,
        url: url,
        data: cerveja
      })
      .success(function(data){
        $scope.scsMsg = 'Cerveja ' + cerveja.name + ' criada com sucesso';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.errMsg = 'Error:  ' + err;
      });
    }
  },
  search: function ($scope, $http, $location) {
    var url = '/api/beers/search/';
    $scope.cervejas = [];
    $scope.busca = 'Skol';

    $scope.search = function(busca){

      var buscaParam = url+busca;
      // console.log($scope.busca);

      // $http.get(buscaParam).success(function(data){

      $http.get(buscaParam)
      .success(function(data){
        $scope.cervejas = data;
        console.log('Cervejas', $scope.cervejas);
        $location.path('/beers/search');
      });
    }
  },
  showSearch: function ($scope, $http) {
  },
  show: function ($scope, $http, $routeParams, $location) {
    var id = $routeParams.id;
    var url = '/api/beers/'+id;

    $http.get(url)
    .success(function(data){
      $scope.cerveja = data;
      console.log('Cerveja', $scope.cerveja);
    })
    .error(function(err){
      console.log('Error: ', err);
      $scope.msg = 'Error:  ' + err;
    });

    $scope.remove = function(cerveja){
      var method = 'DELETE';
      var query = {
        _id: cerveja._id
      };

      var http_settings = {
        method: method,
        url: url,
        data: query
      };
      console.log('alterando', http_settings);
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
    var url = '/api/beers/'+id;
    var method = 'GET';
    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.cerveja = data;
    })
    .error(function(err){
      console.log('Error: ', err);
      $scope.msg = 'Error:  ' + err;
    });

    // Função de alterar
    $scope.update = function(cerveja){    
      var method = 'PUT';
      var http_settings = {
        method: method,
        url: url,
        data: cerveja
      };
      console.log('alterando', http_settings);
      $http(http_settings)
      .success(function(data){
        $scope.scsMsg = 'Cerveja ' + cerveja.name + ' alterada com sucesso';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.errMsg = 'Error:  ' + err;
      });
    }

  }
}

module.exports = beersCtrl;