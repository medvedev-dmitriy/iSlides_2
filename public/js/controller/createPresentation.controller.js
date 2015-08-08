;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .controller('CreatePresentationController',CreatePresentationController);

    CreatePresentationController.$inject = [
        '$scope',
        'PresentationService',
        'LoginService'
    ];

    function CreatePresentationController($scope, PresentationService, LoginService){

        $scope.create = function (username) {
            return PresentationService.create($scope.newPresentation,username);
        };

        $scope.logout = function () {
            PresentationService.presentations = [];
            return LoginService.logout();
        };

    }
})();