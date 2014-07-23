'use strict';

var userCtrl = {
  create: function ($scope, $http) {
    var url = '/api/users/';

    $scope.create = function(usuario){
      var method = 'POST';
      console.log(usuario);
      $http({
        method: method,
        url: url,
        data: usuario
      })
      .success(function(data){
        $scope.scsMsg = 'Usuário ' + usuario.name + ' criado';
      })
      .error(function(err){
        console.log('Error: ', err);
        $scope.errMsg = 'Error:  ' + err;
      });
    }
  },
  login: function ($scope, $http){
    var url = '/api/users/login/';

    // $scope.auth = function(form){
    //   console.log('Login - ' +$scope.username);
    //   console.log('Senha - ' +$scope.password);
    // };

    $scope.error = {};
    $scope.user = {};
    $scope.username  = 'admin';
    $scope.password = 'admin';
    var url = '/api/users/login';

    $scope.auth = function(form) {
      var method = 'POST';
      $http({
        method: method,
        url: url,
        data: form
      })
      .success(function(data){
        console.log('nois');
      })
      .error(function(err){
        console.log(err);
      });
    }
  }
}

module.exports = userCtrl;