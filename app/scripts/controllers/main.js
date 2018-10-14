'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App')
  .controller('MainCtrl',['$scope', 'DataService', '$translate', '$rootScope', '$window', function ($scope, dataservice, $translate, $rootScope, $window) {
    $scope.currentUser = {};
    $scope.selectedLanguage = 'en';
    $scope.currentUser.authenticated = false;
    $window.localStorage.setItem("currentUser", angular.toJson($scope.currentUser));

    $scope.languages = [
      {name:'English', abbr: 'en'},
      {name:'Spanish', abbr: 'es'},
      {name:'Dutch', abbr: 'du'},
      {name:'Italian', abbr: 'it'},
      {name:'French', abbr: 'fr'},
      {name:'German', abbr: 'de'},
    ]

    // Control language based on locale files
    $scope.changeLanguage = function (key) {
      $translate.use(key);
    };

    // Listen for changes to the users language
    $scope.$watch('selectedLanguage', function(nv) {
      if(!_.isUndefined(nv)) {
        $scope.changeLanguage(nv);
        console.log(nv);
      }
    });
}]);
