'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:MainCtrl
 * @description
 * # DataService
 * Controller of the globalHack7App
 */
angular.module('globalHack7App').service('DataService', ['$http', '$window', '$location', '$rootScope', '$q', function ($http, $window, $location, $rootScope, $q) {
  var getData = function(userInfo) {
    $http({
      method: 'GET',
      url: 'http://67.205.159.40/Users/' + userInfo.id,
      headers: {
        "Authorization": "Bearer " + userInfo.token
      }
    })
      .then(function (data, status) {
        console.log(data);
        $window.localStorage.setItem("currentUser", angular.toJson(data));

        return data;
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  // Get resources data
  this.getResources = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://67.205.159.40/Resources/',
    })
      .then(function (res, status) {
        console.log(res.data);
        deferred.resolve(res.data);
      })
      .catch(function (e) {
        console.log(e);
      });
    return deferred.promise;
  };

  // Get organizations data
  this.getOrganizations = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://67.205.159.40/Organizations/',
    })
      .then(function (res, status) {
        console.log(res.data);
        console.log("From service", res.data);
        deferred.resolve(res.data);
      })
      .catch(function (e) {
        console.log(e);
      });
    return deferred.promise;
  };

  // This is the post request for registration
  this.registerUser = function(userInfo) {
    console.log(JSON.stringify(userInfo));
    $http({
      method: 'POST',
      url: 'http://67.205.159.40/SignUp/',
      data: JSON.stringify(userInfo),
      headers: {'Content-Type': 'application/json'}
    }).then(function (res) {
        console.log(res);
        var currentUser = {};
        if(!_.isUndefined(res)){
          if(!_.isUndefined(res.data) && res.data.active) {
            currentUser = res.data;
            $window.localStorage.setItem("currentUser", angular.toJson(currentUser));
            $rootScope.$broadcast('currentUserUpdated');
          } else {
            $window.localStorage.setItem("currentUser", angular.toJson(currentUser));
            $rootScope.$broadcast('currentUserUpdated');
          }
          return $location.url("/dashboard");
        }
      }).catch(function (e) {
        console.log(e);
        return $location.url("/signup");
      });
  };

  this.loginUser = function(userInfo) {
    console.log(userInfo);
    $http({
      method: 'POST',
      url: 'http://67.205.159.40/Sessions/',
      data: JSON.stringify(userInfo),
      headers: {'Content-Type': 'application/json'}
    }).then(function (res) {
      console.log(res);
      var currentUser = {};
      if(!_.isUndefined(res)){
        if(!_.isUndefined(res.data) && res.data.active) {
          currentUser = res.data;
          $window.localStorage.setItem("currentUser", angular.toJson(currentUser));
          $rootScope.$broadcast('currentUserUpdated');
        } else {
          $window.localStorage.setItem("currentUser", angular.toJson(currentUser));
          $rootScope.$broadcast('currentUserUpdated');
        }
        return $location.url("/dashboard");
      }
      }).catch(function (e) {
        console.log(e);
        return $location.url("/login");
      });
  };
}]);
