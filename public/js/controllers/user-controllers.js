'use strict';

var userCtrl = {
  create: function ($scope, $http) {
    var url = '/api/users/';

    $scope.create = function(usuario){
      var method = 'POST';
      console.table(usuario);
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
  }
}

module.exports = userCtrl;