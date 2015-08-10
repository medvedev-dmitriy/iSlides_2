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


                HomeService.createPresentation = function () {
                    $location.path('/create');
                };


                HomeService.loadPresentation = function(user, success, error){
                    $http.get('/presentations', { params: { user: user }})
                        .success(success)
                        .error(error);
                    $http.get('/images',{params: {user: user}})
                        .success(function(data){
                            console.log(data);
                            $rootScope.photos = JSON.parse(data[0].images);
                        })
                        .error();
                };

                HomeService.deletePresentation = function(id,index){
                    PresentationService.presentations.splice(index,1);
                    $http.delete('/presentation',{params: {id: id}});
                };

                return HomeService;
            }
        ])
})();