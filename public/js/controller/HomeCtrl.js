'use strict';

iSlidesApp.controller('HomeCtrl',[
    '$scope',
    '$http',
    '$location',
    'HomeService',
    'LoginService',
    function($scope, $http, $location, HomeService, LoginService){
        $scope.logout = function() {
            return LoginService.logout();
        };

        $scope.createPresentation = function(){
            //return HomeService.createPresentation();
            $location.path('/create');
        }
    }
]);