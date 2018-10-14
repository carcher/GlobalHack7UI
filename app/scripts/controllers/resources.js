'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App')
  .controller('ResourcesCtrl',['$scope', 'DataService', '$filter', function ($scope, dataservice, $filter) {
    var ctrl = this;

    // Find the organization based on id
    ctrl.setResources = function() {
      $scope.resources = [];
      dataservice.getResources().then(function(resources) {
        dataservice.getOrganizations().then(function(org) {
        console.log(org, resources);
        _.forEach(resources, function(res) {
          var i = $filter('filter')(org, {id: res.organizationId});
          console.log(i);
          res.organization = i[0];
          $scope.resources.push(res);
          console.log(res.org);
         });
        });
    });
      console.log($scope.resources);
    }
    ctrl.setResources();
    console.log($scope.resources);
  }]);
