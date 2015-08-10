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

    function PresentationController(
        $scope, $http, $location, HomeService,
        LoginService, PresentationService, $routeParams, $sce) {

        $scope.selectedSlide = 0;
        $scope.tools = PresentationService.tools;
        $scope.figures = PresentationService.figures;
        $scope.font = PresentationService.font;
        var presentations = PresentationService.presentations;
        $scope.slidebg = {
            color: presentations[$routeParams.index].presentation_background ||
            PresentationService.figures.colors[0]
        };
        $scope.aspectRatio = presentations[$routeParams.index].presentation_aspectratio ||
                             presentations[$routeParams.index].aspectRatio;

        $scope.animations = PresentationService.animations;


        if( presentations[$routeParams.index].presentation_content != null &&
            presentations[$routeParams.index].presentation_content != undefined) {
            $scope.slides = JSON.parse(presentations[$routeParams.index].presentation_content);
            var slideTools = $scope.slides[$scope.selectedSlide];
        }
        else {
            $scope.slides = [];
            var slideTools = [];
            $scope.slides.push(slideTools);
        }

        if(presentations[$routeParams.index].presentation_animation != null &&
            presentations[$routeParams.index].presentation_animation != undefined &&
            presentations[$routeParams.index].presentation_animation != "" ) {
            $scope.slideAnimation = JSON.parse(presentations[$routeParams.index].presentation_animation);
        }else{
            $scope.slideAnimation = [];
        }



        $scope.$on('style', function (event, data) {
            $scope.slides[data.selectedSlide][data.index].style = data.style;
        });

        $scope.addSlide = function (){
            $scope.selectedSlide++;
            slideTools = [];
            $scope.slides.push(slideTools);
        };

        $scope.changeSlide = function($index) {
            $scope.selectedSlide = $index;
            console.log($scope.selectedSlide);
            slideTools = $scope.slides[$index];
        };

        $scope.deleteSlide = function ($index){
            $scope.selectedSlide = 0;
            slideTools = $scope.slides[0];
            $scope.slides.splice($index, 1);
            console.log($scope.slides);
        };



        $scope.selectedIndex = 0;

        $scope.itemClicked = function ($index) {
            $scope.selectedIndex = $index;
        };

        $scope.changeBackgroundColor = function(color){
            $scope.slidebg.color = color;
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
            if(index === undefined || index === null || index < 0) return;
            var tmp = slideTools[index];
            slideTools[index] = slideTools[index - 1];
            slideTools[index - 1] = tmp;
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
            slideTools.push({name: 'video', url: url, style: ''});
        };

        $scope.videoUrlConversion = function (url) {
            return PresentationService.videoUrlConversion(url);
        };

        $scope.addText = function (font, size) {
            slideTools.push({name: 'text', font: font, size: parseInt(size), style: '',value: ''});
        };

        $scope.addImage = function (url) {
            slideTools.push({name: 'image', url: url, style: ''});
        };

        $scope.logout = function () {
            PresentationService.presentations = [];
            return LoginService.logout();
        };

        $scope.save = function (username) {
            return PresentationService.save($scope.slides,
                                            username,
                                            $routeParams.index,
                                            $scope.slidebg.color,
                                            $scope.slideAnimation);
        };

        $scope.presentation = function () {
            console.log($routeParams.index);
            console.log(PresentationService.presentations[$routeParams.index]);
        };

        $scope.show = function(){
            return PresentationService.show($routeParams.index);
        };

        $scope.goFullscreen = function () {
            if (Fullscreen.isEnabled())
                Fullscreen.cancel();
            else
                Fullscreen.all();
        };

        $scope.setSlideAnimation = function(animation){
            console.log(animation + ' ' +$scope.selectedSlide);
            $scope.slideAnimation[$scope.selectedSlide] = animation;
            console.log($scope.slideAnimation);
        }
    };
})();
