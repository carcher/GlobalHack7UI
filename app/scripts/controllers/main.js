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
    $scope.currentUser.active = false;
    $window.localStorage.setItem("currentUser", angular.toJson($scope.currentUser));

    $scope.languages = [
      {name:'English', abbr: 'en'},
      {name:'Spanish', abbr: 'es'},
      {name:'Dutch', abbr: 'du'},
      {name:'Italian', abbr: 'it'},
      {name:'French', abbr: 'fr'},
      {name:'German', abbr: 'de'},
    ];

    $scope.navigation = [
      {name:'About', active: false, enabled: false},
      {name:'Dashboard', active: true, enabled: true},
      {name:'Contact', active: false, enabled: true},
      {name:'Home', active: false, enabled: false},
      {name:'Login', active: false, enabled: true},
      {name:'Employment', active: false, enabled: false},
      {name:'Community', active: false, enabled: false},
      {name:'Resources', active: false, enabled: false},
    ];

    $scope.changeActiveNav = function(obj) {
      obj.active = true;

      _.forEach($scope.navigation, function(navItem) {
        if(navItem.name !== obj.name) {
          navItem.active = false;
        }
      })
    }

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

    $rootScope.$on('currentUserUpdated', function() {
      var currentUser = JSON.parse($window.localStorage.getItem("currentUser"));
      console.log(currentUser);
      if(!_.isUndefined(currentUser)) {
        $scope.currentUser = currentUser;
      }
    });
}]);
