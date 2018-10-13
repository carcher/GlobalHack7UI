'use strict';

/**
 * @ngdoc overview
 * @name globalHack7App
 * @description
 * # globalHack7App
 *
 * Main module of the application.
 */
angular
  .module('globalHack7App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
    $locationProvider.hashPrefix('');
  });
