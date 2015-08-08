;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .controller('CreatePresentationController',CreatePresentationController);

    CreatePresentationController.$inject = [
        '$scope',
        'PresentationService'
    ];

    function CreatePresentationController($scope,PresentationService){

        $scope.create = function (username) {
            return PresentationService.create($scope.newPresentation,username);
        };

    }
})();