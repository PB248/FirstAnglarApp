angular.module('ControlRoom.controllers', [])

.controller('MyCtrlHome', ['$scope',
    function ($scope) {
        'use strict';
        console.log("I am home");
        // $scope.students = dsStudents;
     }
])

//.controller('MyCtrlMessages', ['$scope', '$http', '$templateCache',
//    function ($scope, $http, $templateCache) {
//        $scope.status;
//        $scope.messageList = [];
//   
//        $scope.method = 'GET';
//        $scope.url = '/ctrlRoom.php?method=message';
//
//        $scope.fetch = function() {
//            $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
//                success(function(data, status) {
//                    $scope.messageList = data.data;
//                    $scope.status = status;
//                }).
//                error(function(data, status) {
//                    $scope.messageList = data || "Request failed";
//                    $scope.status = status;
//                });
//            };
//    }
//]);
        
.controller('MyCtrlMessages', ['$scope', 'dataFactory',
    function ($scope, dataFactory) {
        $scope.status;
        $scope.messageList = [];
   
        dataFactory.getMessages().
            success(function(data, status) {
                $scope.status = status;
                $scope.messageList = data.data;
            }).
            error(function(data, status) {
                $scope.messageList = data || "Request failed";
                $scope.status = status;
            });
    }
]);
