angular.module('ControlRoom.services', [])
  
.factory('dataFactory',
    function ($http) {
        var dataFactory = {};

//        var method = 'GET';
//        var url = '/ctrlRoom.php?method=';

        dataFactory.getMessages =  function() {
            return $http({method: 'GET', url: '/ctrlRoom.php?method=message'})
        };

    return dataFactory;
  });