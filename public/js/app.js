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
    when('/', {
      templateUrl: 'expose/index/list',
      controller: 'BeersIndexCtrl'
    }).
    // criando a rota de listagem das cervejas
    when('/beers', {
      templateUrl: 'expose/beers/list',
      controller: 'BeersIndexCtrl'
    }).
    when('/beers/create', {
      templateUrl: 'expose/beers/create',
      controller: 'BeersCreateCtrl'
    }).
    when('/beers/details/:id', {
      templateUrl: 'expose/beers/show',
      controller: 'BeersShowCtrl'
    }).
    when('/beers/details/:id/edit', {
      templateUrl: 'expose/beers/edit',
      controller: 'BeersEditCtrl'
    }).
    when('/beers/search', {
      templateUrl: 'expose/beers/search',
      controller: 'BeersSearchCtrl'
    }).
    when('/shops', {
      templateUrl: 'expose/shops/list',
      controller: 'ShopsIndexCtrl'
    }).
    when('/shops/create', {
      templateUrl: 'expose/shops/create',
      controller: 'ShopsCreateCtrl'
    }).
    when('/shops/:id', {
      templateUrl: 'expose/shops/show',
      controller: 'ShopsShowCtrl'
    }).
    when('/shops/:id/edit', {
      templateUrl: 'expose/shops/edit',
      controller: 'ShopsEditCtrl'
    }).
    when('/shops/:id/remove', {
      templateUrl: 'expose/shops/remove',
      controller: 'ShopsRemoveCtrl'
    }).
    when('/signup', {
      templateUrl: 'expose/users/signup',
      controller: 'UsersCreateCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
