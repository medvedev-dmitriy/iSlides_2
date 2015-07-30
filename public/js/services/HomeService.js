"use strict";

iSlidesApp.factory('HomeService',[
    '$http',
    '$location',
    function($http, $location){
        var HomeService = {};

        HomeService.presentations = [];

        HomeService.createPresentation = function(){
            console.log('homeservice');
            $location.path('/create');
        };

        HomeService.addPresentation = function(presentation) {
            presentation.number = HomeService.presentation.length;
            HomeService.presentation.push(presentation);
            return presentation;
        };

        return HomeService;
    }
]);