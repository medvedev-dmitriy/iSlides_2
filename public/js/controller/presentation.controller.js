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
        $scope.slides = JSON.parse(PresentationService.presentations[$routeParams.index].presentation_content);
        console.log(PresentationService.presentations[$routeParams.index].presentation_content);
        $scope.selectedSlide = 0;
        var slideTools = $scope.slides[$scope.selectedSlide];


        $scope.$on('style', function (event, data) {
            slideTools[data.index].style = data.style;
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
            slideTools.splice(index,1);
        };

        $scope.up = function (index) {
            if(index === undefined || index === null) return;
            var tmp = slideTools[index];
            slideTools[index] = slideTools[index + 1];
            slideTools[index + 1] = tmp;
        };

        $scope.down = function (index) {
            slideTools.splice(index,1);
        };

        $scope.toBackground = function (index) {
            slideTools.unshift(slideTools[index]);
            slideTools.splice(index+1,1);
        };

        $scope.toForeground = function (index) {
            slideTools.push(slideTools[index]);
            slideTools.splice(index,1);
        };


        $scope.addFigure = function (name, color) {
            slideTools.push({name: name.toLowerCase(), color: color, style: ''});
        };

        $scope.addVideo = function (url) {
            if (url === undefined || url === null) return;
            slideTools.push({name: 'video', url: $sce.trustAsResourceUrl(url), style: ''});

        };

        $scope.addText = function (font, size) {
            slideTools.push({name: 'text', font: font, size: parseInt(size), style: ''});
        };

        $scope.addImage = function (url) {
            slideTools.push({name: 'image', url: $sce.trustAsResourceUrl(url), style: ''});
        };

        $scope.logout = function () {
            return LoginService.logout();
        };

        $scope.create = function (username) {
            $scope.slides = [];
            slideTools = [];
            return PresentationService.create($scope.newPresentation,username);
        };

        $scope.save = function (username) {
            return PresentationService.save($scope.slides,username,$routeParams.index);
        };

        $scope.presentation = function () {
            console.log($routeParams.index);
            console.log(PresentationService.presentations[$routeParams.index]);
        }
    };
})();
