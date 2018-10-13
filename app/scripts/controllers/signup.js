'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:SignupCtrl
 * @description
 * # MainCtrl
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
      gender: 0,
      password: "",
      passwordConfirmation: ""
    };
    $scope.register = function(){
      console.log($scope.userInfo)
      dataservice.registerUser($scope.userInfo);
    };
    $scope.$watch('userInfo', function(nv){
      console.log(nv);
    });
}]);

//redirect success or failure
