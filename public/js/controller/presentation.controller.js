;(function() {
    'use strict';

    angular.module('iSlidesApp')
        .controller('PresentationController', PresentationController);

    PresentationController.$inject = [
        '$scope',
        '$http',
        '$location',
        'HomeService',
        'LoginService',
        'PresentationService',
        '$routeParams',
        '$sce'
       ];

    function PresentationController($scope, $http, $location, HomeService, LoginService, PresentationService,
                                    $routeParams, $sce) {

        $scope.tools = PresentationService.tools;
        $scope.figures = PresentationService.figures;
        $scope.font = PresentationService.font;
        $scope.slides = [];
        var slideTools = [];
        $scope.slides.push(slideTools);
        $scope.selectedSlide = 0;

        $scope.$on('style', function (event, data) {
            console.log(data);
        });

        $scope.addSlide = function (){
            $scope.selectedSlide++;
            slideTools = [];
            $scope.slides.push(slideTools);
        };

        $scope.changeSlide = function($index){
            $scope.selectedSlide = $index;
            slideTools = $scope.slides[$index];
        };

        $scope.deleteSlide = function ($index){
            $scope.selectedSlide = 0;
            slideTools = $scope.slides[0];
            $scope.slides.splice($index, 1);
            console.log($scope.slides);
        };

        $scope.slidebg = {
            color: 'yellow'
        };

        $scope.selectedIndex = 0;

        $scope.itemClicked = function ($index) {
            $scope.selectedIndex = $index;
        };

        $scope.changeBackgroundColor = function(index){
            $scope.slidebg.color = PresentationService.figures.colors[index];
        };

        $scope.deleteItem = function (index) {
            console.log(index);
            slideTools.splice(index,1);
            console.log('slideTools');
            console.log(slideTools);
            console.log('$scope.slides');
            console.log($scope.slides);
        };

        $scope.addFigure = function (name, color) {
            slideTools.push({name: name.toLowerCase(), color: color});
            console.log('slideTools');
            console.log(slideTools);
            console.log('$scope.slides');
            console.log($scope.slides);
        };

        $scope.addVideo = function (url) {
            if (url === undefined || url === null) return;
            slideTools.push({name: 'video', url: $sce.trustAsResourceUrl(url)});

        };

        $scope.addText = function (font, size) {
            slideTools.push({name: 'text', font: font, size: parseInt(size)});
        };

        $scope.addImage = function (url) {
            slideTools.push({name: 'image', url: $sce.trustAsResourceUrl(url)});
        };

        $scope.logout = function () {
            return LoginService.logout();
        };

        $scope.create = function () {
            return PresentationService.create($scope.newPresentation);
        };

        $scope.presentation = function () {
            console.log($routeParams.index);
            console.log(PresentationService.presentations[$routeParams.index]);
        }
    };
})();
