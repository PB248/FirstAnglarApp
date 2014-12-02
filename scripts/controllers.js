angular.module('ControlRoom.controllers', [])

.controller('MyCtrlHome', ['$scope',
    function ($scope) {
        'use strict';
        console.log("I am home");
        // $scope.students = dsStudents;
     }
])

.controller('MyCtrlMessages', ['$scope',
    function ($scope) {
        'use strict';
        console.log("I am in Messages");
    }
]);
