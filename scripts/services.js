angular.module('ControlRoom.services', [])
  
.factory('dataFactory',
    function ($http) {
        var dataFactory = {};

        var pUrl = 'http://peter.app4.ws/ctrlRoom.php?method=';

        dataFactory.getMessagesData =  function() {
            return $http({method: 'GET', url: pUrl + 'messageData'})
        };
        dataFactory.getMessagesYearLevel =  function() {
            return $http({method: 'GET', url: pUrl + 'messageYearLevel'})
        };
        dataFactory.getMessagesNew =  function(data) {
            return $http({method: 'GET', url: pUrl + 'messageNew&mdata='+JSON.stringify(data)})
        };

    return dataFactory;
  });