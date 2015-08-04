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
        $scope.figures = PresentationService.figures;
        $scope.font = PresentationService.font;
        $scope.slideTools = [];
        $scope.show = false;

        $scope.deleteItem = function(index){
            console.log(index);
            $scope.slideTools[index].show = false;
            console.log(index);
        };

        $scope.addFigure = function(name, color){
            $scope.slideTools.push({name: name.toLowerCase(),color: color, show: true});
        };

        $scope.addVideo = function(url){
            if(url === undefined || url === null) return;
            $scope.slideTools.push({name: 'video', url: $sce.trustAsResourceUrl(url), show: true});
        };

        $scope.addText = function(font, size){
            $scope.slideTools.push({name: 'text', font: font, size: parseInt(size), show: true});
        };

        $scope.addToSlide = function(tool){
            if(tool === 'Video') {
                var url = prompt('url?');
                $scope.slideTools.push({name: tool, url: $sce.trustAsResourceUrl(url)});
                console.log($scope.slideTools);
                return;
            }
            $scope.slideTools.push(tool.toLowerCase());
        };

        $scope.addImage = function(url){
            $scope.slideTools.push({name: 'image', url: $sce.trustAsResourceUrl(url), show: true});
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
