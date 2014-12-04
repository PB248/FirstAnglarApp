angular.module('ControlRoom.services', [])
  
//.factory('dataFactory', ['$scope', '$http', '$templateCache',
//    function ($scope, $http, $templateCache) {
.factory('dataFactory', ['$scope',
    function ($scope) {
        var dataFactory = {};

        $scope.method = 'GET';
        $scope.url = '/ctrlRoom.php?method=message';

        dataFactory.getMessages =  function() {
            $http({method: $scope.method, url: $scope.url, cache: $templateCache})
        };

    return dataFactory;
  }]);