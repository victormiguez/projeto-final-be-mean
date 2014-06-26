'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  // $routeProvider.
    // when('/beers', {
    //   templateUrl: 'expose/beers/list',
    //   controller: 'IndexCtrl'
    // }).
    // when('/beers/create', {
    //   templateUrl: 'expose/beers/create',
    //   controller: 'BeersCreateCtrl'
    // }).
    // when('/beers/:_id', {
    //   templateUrl: 'expose/beers/show',
    //   controller: 'BeersShowCtrl'
    // }).
    // when('/beers/:_id/edit', {
    //   templateUrl: 'expose/beers/edit',
    //   controller: 'BeersEditCtrl'
    // }).
    // when('/beers/:_id/remove', {
    //   templateUrl: 'expose/beers/remove',
    //   controller: 'BeersRemoveCtrl'
    // }).
    // when('/shops', {
    //   templateUrl: 'expose/shops/list',
    //   controller: 'ShopsIndexCtrl'
    // }).
    // when('/shops/create', {
    //   templateUrl: 'expose/shops/create',
    //   controller: 'ShopsCreateCtrl'
    // }).
    // when('/shops/:_id', {
    //   templateUrl: 'expose/shops/show',
    //   controller: 'ShopsShowCtrl'
    // }).
    // when('/shops/:_id/edit', {
    //   templateUrl: 'expose/shops/edit',
    //   controller: 'ShopsEditCtrl'
    // }).
    // when('/shops/:_id/remove', {
    //   templateUrl: 'expose/shops/remove',
    //   controller: 'ShopsRemoveCtrl'
    // });

  $locationProvider.html5Mode(true);
});
