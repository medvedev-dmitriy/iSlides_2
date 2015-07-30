'use strict';

iSlidesApp.controller('PresentationCtrl',[
    '$scope',
    '$http',
    '$location',
    'HomeService',
    'LoginService',
    'PresentationService',
    function($scope, $http, $location, HomeService, LoginService, PresentationService){
        $scope.logout = function() {
            return LoginService.logout();
        };

        $scope.create = function(){
            //return PresentationService.create($scope.newPresentation);
            console.log($scope.newPresentation)
        }
    }
]);