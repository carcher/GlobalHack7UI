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
    $scope.userInfo = {
      userName: "",
      password: ""
    };
    $scope.logon = function(userInfo){
      dataservice.registerUser(userInfo);
    };
    $scope.data = dataservice.getData();
    console.log($scope.data);
}]);
