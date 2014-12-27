angular.module('ControlRoom.controllers', [])

.controller('MyCtrlHome', ['$scope',
    function ($scope) {
        'use strict';
        console.log("I am home");
        // $scope.students = dsStudents;
     }
])
        
.controller('MyCtrlMessages', ['$scope', 'dataFactory',
    function ($scope, dataFactory) {
        $scope.status;
        $scope.messageList = [];
        $scope.yearLevels = [];
   
        $scope.isCreating = false;
        
        dataFactory.getMessagesData().
            success(function(data, status) {
                $scope.status = status;
                $scope.messageList = data.data[0].data;
                $scope.yearLevels = data.data[1].yearlevel;
            }).
            error(function(data, status) {
                $scope.messageList = data || "Request failed";
                $scope.status = status;
            });
        
        function resetCreateForm() {
            $scope.newMessage = {
                groupguid: '',
                title: '',
                body: '',
                who: ''
            };
        }
        
        //--------------------------------------------------------
        // CRUD
        //--------------------------------------------------------
        function createMessage(message) {
            message.groupguid = '123test';
            message.who = 'EveryOne';
            
            var submitForm = true;
            
            if (message.title == '') {
                $scope.errorTitle = true;
                submitForm = false;
            }
                
            if (submitForm) {
                dataFactory.getMessagesNew(message).
                    success(function(data, status) {
                        $scope.messageList.unshift(message);
                    }).
                    error(function(data, status) {
                        $scope.messageList = data || "Request failed";
                        $scope.status = status;
                    });
                resetCreateForm();
                $scope.isCreating = false;
            }
        }
        
        function updateMessage(message) {
            var index = _.findIndex($scope.messageList, function (b) {
                return b.id == message.id
            });
            $scope.messageList[index] = message;
        }
        
        $scope.createMessage = createMessage;
        $scope.updateMessage = updateMessage;
        //--------------------------------------------------------
        // Creating States
        //--------------------------------------------------------
        function startCreating() {
            $scope.isCreating = true;
            
            resetCreateForm();
        }
        $scope.startCreating = startCreating;
        
        function cancelCreating() {
            $scope.isCreating = false;
        }
        $scope.cancelCreating = cancelCreating;
    }
]);
