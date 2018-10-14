'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App')
  .controller('ContactCtrl',['$scope','$route', function ($scope, $route) {
    $scope.msgInfo = {
      fullName: "",
      email: "",
      message: ""
      }
    var success = false;
    $scope.sendMessage = function(){
      $scope.success = true;
      $scope.msgInfo.fullName = "";
      $scope.msgInfo.email = "";
      $scope.msgInfo.message = "";
    };
}]);
