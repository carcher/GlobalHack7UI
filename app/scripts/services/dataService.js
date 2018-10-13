'use strict';

/**
 * @ngdoc function
 * @name globalHack7App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the globalHack7App
 */
angular.module('globalHack7App').service('DataService', ['$http', function ($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  this.items = [];
  this.getData = function() {
    $http({
      method: 'GET',
      //url: 'https://jsonplaceholder.typicode.com/todos/1',
      url: 'http://67.205.129.210/Users/2',
      headers: {
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcmNoZXIxMjA0QGdtYWlsLmNvbSIsIlVzZXJJZCI6IjIiLCJleHAiOjE1Mzk0NTQzMTIsImlzcyI6Ikdsb2JhbGhhY2siLCJhdWQiOiJHbG9iYWxoYWNrIn0.rVstjBZEX7_3B5AUOfP4GRCLaWzL_kOCnPnmJyZ9Ez8"
      }
    })
      .then(function (data, status) {
        console.log(data);
        this.items = data;

        return this.items;
      })
      .catch(function (data, status) {
        console.log("Error");
      });
  };
}]);
