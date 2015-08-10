;(function() {
    "use strict";

    angular.module('iSlidesApp')
        .factory('HomeService', [
            '$http',
            '$location',
            'PresentationService',
            '$rootScope',
            function ($http, $location, PresentationService, $rootScope) {
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
                    $http.get('/images',{params: {user: user}})
                        .success(function(data){
                            $rootScope.photos = JSON.parse(data[0].images);
                        })
                        .error();
                };

                HomeService.deletePresentation = function(id){
                    $http.delete('/presentation',{params: {id: id}})
                        .success()
                        .error();
                };

                return HomeService;
            }
        ])
})();