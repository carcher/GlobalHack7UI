'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:MainCtrl
 * @description
 * # DataService
 * Controller of the globalHack7App
 */
angular.module('globalHack7App').service('DataService', ['$http', '$window', '$location', function ($http, $window, $location) {
  this.getData = function() {
    $http({
      method: 'GET',
      url: 'http://67.205.159.40/',
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcmNoZXIxMjA0QGdtYWlsLmNvbSIsIlVzZXJJZCI6IjIiLCJleHAiOjE1Mzk0NTQzMTIsImlzcyI6Ikdsb2JhbGhhY2siLCJhdWQiOiJHbG9iYWxoYWNrIn0.rVstjBZEX7_3B5AUOfP4GRCLaWzL_kOCnPnmJyZ9Ez8"
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
            currentUser.authenticated = true;
            $window.localStorage.setItem("currentUser", angular.toJson(currentUser));
          } else {
            $window.localStorage.setItem("currentUser", angular.toJson(currentUser));
          }
          return $location.url("/dashboard");
        }
      }).catch(function (e) {
        console.log(e);
        return $location.url("/signup");
      });
  };
}]);
