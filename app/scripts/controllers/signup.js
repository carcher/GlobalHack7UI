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
      userName: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };
    $scope.register = function(){
      console.log($scope.userInfo);
    };
    $scope.$watch('userInfo', function(nv){
      console.log(nv);
    });
}]);

//redirect success or failure
