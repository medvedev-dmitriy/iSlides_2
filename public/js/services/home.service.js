;(function() {
    "use strict";

    angular.module('iSlidesApp')
        .factory('HomeService', [
            '$http',
            '$location',
            function ($http, $location) {
                var HomeService = {};

                HomeService.presentations = [];

                HomeService.createPresentation = function () {
                    $location.path('/create');
                };

                HomeService.addPresentation = function (presentation) {
                    presentation.number = HomeService.presentation.length;
                    HomeService.presentation.push(presentation);
                    return presentation;
                };

                return HomeService;
            }
        ])
})();