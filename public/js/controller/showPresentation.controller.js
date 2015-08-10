;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .controller('ShowPresentationController', ShowPresentationController);

    ShowPresentationController.$inject = [
        '$scope',
        '$location',
        '$http',
        'PresentationService',
        '$routeParams',
        'Fullscreen',
        '$window'
    ];

    function ShowPresentationController($scope, $location, $http, PresentationService, $routeParams,Fullscreen, $window){
        $scope.selectedSlide = 0;
        $scope.tools = PresentationService.tools;
        $scope.figures = PresentationService.figures;
        $scope.font = PresentationService.font;
        $scope.slidebg = { color: PresentationService.presentations[$routeParams.presid].presentation_background || PresentationService.figures.colors[0] };
        $scope.aspectRatio = PresentationService.presentations[$routeParams.presid].presentation_aspectratio ||
            PresentationService.presentations[$routeParams.presid].aspectRatio;

        if( PresentationService.presentations[$routeParams.presid].presentation_content != null &&
            PresentationService.presentations[$routeParams.presid].presentation_content != undefined) {
            $scope.slides = JSON.parse(PresentationService.presentations[$routeParams.presid].presentation_content);
            var slideTools = $scope.slides[$scope.selectedSlide];
        }
        else {
            $scope.slides = [];
            var slideTools = [];
            $scope.slides.push(slideTools);
        }

        $scope.videoUrlConversion = function (url) {
            return PresentationService.videoUrlConversion(url);
        };

        $scope.nextSlide = function(){
            if ($scope.slides.length !== $scope.selectedSlide + 1) $scope.selectedSlide++;
        };

        $scope.previousSlide = function(){
            if ($scope.selectedSlide !== 0) $scope.selectedSlide--;
        };


        $scope.goFullscreen = function () {
            if (Fullscreen.isEnabled()) {
                Fullscreen.cancel();
            }
            else {
                Fullscreen.all();
            }
        };

    }
})();