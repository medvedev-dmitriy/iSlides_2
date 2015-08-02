'use strict';

iSlidesApp.controller('HomeCtrl', [
    '$scope',
    '$http',
    '$location',
    'HomeService',
    'LoginService',
    'PresentationService',
    function ($scope, $http, $location, HomeService, LoginService, PresentationService) {
        $scope.logout = function () {
            return LoginService.logout();
        };

        $scope.presentations = PresentationService.presentations;

        $scope.createPresentation = function () {
            $location.path('/create');
        }
    }
]);