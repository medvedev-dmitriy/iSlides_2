;(function() {
    "use strict";

    angular.module('iSlidesApp')
        .factory('HomeService', [
            '$http',
            '$location',
            'PresentationService',
            function ($http, $location, PresentationService) {
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

                HomeService.loadPresentation = function(user, success, error){
                    $http.get('/presentations', { params: { user: user }})
                        .success(success)
                        .error(error);
                };

                return HomeService;
            }
        ])
})();