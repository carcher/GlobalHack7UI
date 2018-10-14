'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App')
  .controller('DashboardCtrl',['$scope', 'DataService', '$rootScope', '$window', function ($scope, dataservice, $rootScope, $window) {
    $scope.currentUser = JSON.parse($window.localStorage.getItem("currentUser"));
    console.log($scope.currentUser);
  }]);
