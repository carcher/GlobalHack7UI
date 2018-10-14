'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App')
  .controller('MainCtrl',['$scope', 'DataService', '$translate', function ($scope, dataservice, $translate) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.data = dataservice.getData();
    console.log($scope.data);

    // Control language based on locale files
    $scope.changeLanguage = function (key) {
      $translate.use(key);
    };
}]);
