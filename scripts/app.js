'use strict';

// Declare app level module which depends on filters, and services
angular.module('ControlRoom', [
  'ngRoute',
  'ControlRoom.controllers'
])

.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home.html',
            controller: 'MyCtrlHome'
        });
        $routeProvider.when('/Messages', {
            templateUrl: 'messages.html',
            controller: 'MyCtrlMessages'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
}]);
