'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    // criando a rota de listagem das cervejas
    when('/beers', {
      templateUrl: 'expose/beers/list',
      controller: 'IndexCtrl'
    }).
    when('/beers/create', {
      templateUrl: 'expose/beers/create',
      controller: 'BeersCreateCtrl'
    }).
    when('/beers/:id', {
      templateUrl: 'expose/beers/show',
      controller: 'BeersShowCtrl'
    }).
    when('/beers/:id/edit', {
      templateUrl: 'expose/beers/edit',
      controller: 'BeersEditCtrl'
    }).
    when('/beers/:id/remove', {
      templateUrl: 'expose/beers/remove',
      controller: 'BeersRemoveCtrl'
    }).
    when('/shops', {
      templateUrl: 'expose/shops/list',
      controller: 'ShopsIndexCtrl'
    }).
    when('/shops/:id', {
      templateUrl: 'expose/shops/show',
      controller: 'ShopsShowCtrl'
    }).
    when('/shops/create', {
      templateUrl: 'expose/shops/create',
      controller: 'ShopsCreateCtrl'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
