'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App')
  .controller('SignupCtrl',['$scope', 'DataService', function ($scope, dataservice) {
    $scope.userInfo = {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      phoneNumber: "000-000-0000",
      gender: "",
      password: "",
      passwordConfirmation: ""
    };

    // Call out to register this user
    $scope.register = function(){
      console.log($scope.userInfo)
      dataservice.registerUser($scope.userInfo);
    };

    // Listen for changes to the userInfo
    $scope.$watch('userInfo', function(nv){
      console.log(nv);
    });
}]);

//redirect success or failure
