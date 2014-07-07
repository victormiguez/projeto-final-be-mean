'use strict';

var appCtrl = function ($scope, $http) {
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
};

module.exports = appCtrl;


// angular.module('myApp.controllers', []).
//   controller('AppCtrl', function ($scope, $http) {
//     $http({
//       method: 'GET',
//       url: '/api/name'
//     }).
//     success(function (data, status, headers, config) {
//       $scope.name = data.name;
//     }).
//     error(function (data, status, headers, config) {
//       $scope.name = 'Error!';
//     });
//   });