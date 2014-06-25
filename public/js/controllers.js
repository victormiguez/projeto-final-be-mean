'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
  }).
  
  controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.workshop = 'Workshop Be MEAN';

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

  }]).



  controller('BeersIndexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.workshop = 'Workshop Be MEAN';

    // Código colado do exercicio 08
    $scope.reverse = false;
    $scope.predicate = 'name';
    $scope.cervejas = [];
    // criamos um array de cervejas
    // Precisamos buscar nosssas cervejas na nossa API
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

  }]).
  controller('BeersCreateCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.workshop = 'Workshop Be MEAN';
    $scope.msg = 'Cadastro de cerveja'
    var url = '/api/beers/';

    $scope.create = function(cerveja){
      var method = 'POST';
      console.table(cerveja);
      $http({
        method: method,
        url: url,
        data: cerveja
      })
      .success(function(data){
        $scope.msg = 'Cerveja ' + cerveja.name + ' criada com SUCESSO';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.msg = 'Error:  ' + err;
      });
    }

  }]).
  controller('BeersShowCtrl', ['$scope', '$http', '$routeParams', 
    function ($scope, $http, $routeParams) {
    $scope.workshop = 'Workshop Be MEAN';

    // Precisamos buscar nosssa cerveja na nossa API
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

  }]).
  controller('BeersEditCtrl', ['$scope', '$http', '$routeParams', 
    function ($scope, $http, $routeParams) {
    $scope.workshop = 'Workshop Be MEAN';

    // Precisamos buscar nosssa cerveja na nossa API
    var id = $routeParams.id;
    var url = '/api/beers/'+id;
    var method = 'GET';
    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.msg = 'Cerveja ' + data.name;
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
        $scope.msg = 'Cerveja ' + cerveja.name + ' alterada com SUCESSO';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.msg = 'Error:  ' + err;
      });
    }

  }]).
  controller('BeersRemoveCtrl', ['$scope', '$http', '$routeParams', 
    function ($scope, $http, $routeParams) {
    $scope.workshop = 'Workshop Be MEAN';

    // Precisamos buscar nosssa cerveja na nossa API
    var id = $routeParams.id;
    var url = '/api/beers/'+id;
    var method = 'GET';
    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.msg = 'Cerveja ' + data.name;
      $scope.cerveja = data;
    })
    .error(function(err){
      console.log('Error: ', err);
      $scope.msg = 'Error:  ' + err;
    });

    // Função de deletar
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
        $scope.msg = 'Cerveja ' + cerveja.name + ' deletada com SUCESSO';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.msg = 'Error:  ' + err;
      });
    }
  }]).
  controller('ShopsIndexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.workshop = 'Workshop Be MEAN';
    $scope.reverse = false;
    $scope.predicate = 'name';
    $scope.lojas = [];

    var url = '/api/shops';

    $http.get(url)
    .success(function(data){
      $scope.lojas = data;
      console.log('Cervejas', $scope.lojas);
    })
    .error(function(err){
      console.log('Error: ', err);
    });

    $scope.orderBy = function(predicate){
      $scope.predicate = predicate;
      $scope.reverse = !$scope.reverse;
    }
  }]).
  controller('ShopsCreateCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.workshop = 'Workshop Be MEAN';
    $scope.msg = 'Cadastro de Loja'
    var url = '/api/shops/';

    $scope.create = function(loja){
      var method = 'POST';
      console.table(loja);
      $http({
        method: method,
        url: url,
        data: loja
      })
      .success(function(data){
        $scope.msg = 'loja ' + loja.name + ' criada com SUCESSO';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.msg = 'Error:  ' + err;
      });
    }

  }]).
  controller('ShopsShowCtrl', ['$scope', '$http', '$routeParams', '$location', 
    function ($scope, $http, $routeParams, $location) {
    $scope.workshop = 'Workshop Be MEAN';

    // Precisamos buscar nosssa cerveja na nossa API
    var id = $routeParams._id;
    var url = '/api/shops/'+id;

    $http.get(url)
    .success(function(data){
      $scope.loja = data;
      console.log('Cerveja', $scope.loja);
    })
    .error(function(err){
      console.log('Error: ', err);
      $scope.msg = 'Error:  ' + err;
    });

    // Função de deletar
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
      console.log('alterando', http_settings);
      $http(http_settings)
      .success(function(data){
        $location.path('/shops');
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.msg = 'Error:  ' + err;
      });
    }

  }]).
  controller('ShopsEditCtrl', ['$scope', '$http', '$routeParams', 
    function ($scope, $http, $routeParams) {
    $scope.workshop = 'Workshop Be MEAN';

    var id = $routeParams._id;
    var url = '/api/shops/'+id;
    var method = 'GET';
    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.msg = 'Loja ' + data.name;
      $scope.loja = data;
    })
    .error(function(err){
      console.log('Error: ', err);
      $scope.msg = 'Error:  ' + err;
    });

    // Função de alterar
    $scope.update = function(loja){    
      var method = 'PUT';
      var http_settings = {
        method: method,
        url: url,
        data: loja
      };
      console.log('alterando', http_settings);
      $http(http_settings)
      .success(function(data){
        $scope.msg = 'Loja ' + loja.name + ' alterada com SUCESSO';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.msg = 'Error:  ' + err;
      });
    }
  }]);