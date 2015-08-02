'use strict';

iSlidesApp.controller('PresentationCtrl',[
    '$scope',
    '$http',
    '$location',
    'HomeService',
    'LoginService',
    'PresentationService',
    '$routeParams',
    function($scope, $http, $location, HomeService, LoginService, PresentationService, $routeParams){

        $scope.tools = PresentationService.tools;
        $scope.slideTools = [];

        $scope.addToSlide = function(tool){
            console.log(tool);
            $scope.slideTools.push(tool.toLowerCase());
            console.log($scope.slideTools);
        };

        $scope.logout = function() {
            return LoginService.logout();
        };

        $scope.create = function(){
            return PresentationService.create($scope.newPresentation);
        };

        $scope.presentation = function(){
            console.log($routeParams.index);
            console.log(PresentationService.presentations[$routeParams.index]);
        }
    }
]);
