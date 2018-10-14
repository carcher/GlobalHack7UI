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
    // Locale config
    $translateProvider.useStaticFilesLoader({
      prefix: '../locales/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

    // Router config
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl',
      controllerAs: 'signup'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/resources', {
      templateUrl: 'views/resources.html',
      controller: 'ResourcesCtrl',
      controllerAs: 'resources'
    });

    // Locations config
    $locationProvider.hashPrefix('');
  });
