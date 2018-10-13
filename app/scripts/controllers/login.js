'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App')
  .controller('LoginCtrl',['$scope', 'DataService', function ($scope, dataservice) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.data = dataservice.getData();
    console.log($scope.data);
}]);
