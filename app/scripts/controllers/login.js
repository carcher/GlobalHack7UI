'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App')
  .controller('LoginCtrl',['$scope', 'DataService', function ($scope, dataservice) {
    $scope.userInfo = {
      userName: "",
      password: ""
    };

    // Attempt to authenticate the user, pass back to login if failed
    $scope.logon = function(userInfo){
      dataservice.registerUser(userInfo);
    };
}]);
