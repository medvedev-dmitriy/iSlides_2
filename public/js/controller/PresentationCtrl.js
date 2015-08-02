'use strict';

iSlidesApp.controller('PresentationCtrl',[
    '$scope',
    '$http',
    '$location',
    'HomeService',
    'LoginService',
    'PresentationService',
    '$routeParams',
    '$sce',
    function($scope, $http, $location, HomeService, LoginService, PresentationService, $routeParams, $sce){

        $scope.tools = PresentationService.tools;
        $scope.slideTools = [];

        $scope.addToSlide = function(tool){
            if(tool === 'Video') {
                var url = prompt('url?');
                $scope.slideTools.push({name: tool, url: $sce.trustAsResourceUrl(url)});
                console.log($scope.slideTools);
                return;
            }
            $scope.slideTools.push(tool.toLowerCase());
            console.log(slideTools);
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
