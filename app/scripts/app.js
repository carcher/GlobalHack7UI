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
    'pascalprecht.translate',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider, $locationProvider, $translateProvider) {
    // Local config
    $translateProvider.useStaticFilesLoader({
      files: [{
        prefix: '../locales/locale-en',
        suffix: '.json'
      }, {
        prefix: '../locales/locale-es',
        suffix: '.json'
      }, {
        prefix: '../locales/locales-de',
        suffix: '.json'
      }]
    });
    $translateProvider.preferredLanguage('en');

    // Router config
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });

    // Locations config
    $locationProvider.hashPrefix('');
  });
