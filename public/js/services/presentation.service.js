;(function() {
    'use strict';

    angular.module('iSlidesApp')
        .factory('PresentationService', [
            '$http',
            '$location',
            '$sce',
            '$rootScope',
            function ($http, $location, $sce, $rootScope) {
                var PresentationService = {};

                PresentationService.presentations = [];

                PresentationService.animations = ["toggle",
                    "spin-toggle",
                    "scale-fade",
                    "scale-fade-in",
                    "bouncy-scale-in",
                    "flip-in",
                    "slide-left",
                    "slide-right",
                    "slide-top",
                    "slide-down",
                    "bouncy-slide-left",
                    "bouncy-slide-right",
                    "bouncy-slide-top",
                    "bouncy-slide-down",
                    "rotate-in"];

                PresentationService.save = function(slides, user, index, color, slideAnimation){
                    PresentationService.presentations[index] = slides;
                    $http.post('/presentationUpdate', {
                        presentation:{
                            context: JSON.stringify(slides),
                            user: user,
                            presid: index ,
                            bgcolor: color,
                            animates: JSON.stringify(slideAnimation)
                        }
                    })
                        .success(console.log('success http save'))
                        .error(console.log('error http save'));
                    $http.post('/images', {
                        images: {
                            username: user,
                            images: JSON.stringify($rootScope.photos)
                        }
                    })
                        .success()
                        .error();
                };

                PresentationService.create = function (presentation,username) {
                    var index = PresentationService.presentations.length;
                    PresentationService.presentations.push(presentation);
                    presentation.username = username;
                    presentation.presid = index;
                    $http.post('/presentation', { presentation: presentation })
                        .success(console.log('success http save'))
                        .error(console.log('error http save'));
                    return $location.path('/presentation/edit/' + index);
                };

                PresentationService.tools = ['Text', 'Video', 'Circle', 'Rectangle'];

                PresentationService.figures = {
                    names: ['Circle', 'Rectangle'],
                    colors: ['yellow','red', 'green', 'blue']
                };

                PresentationService.font = {
                    names: ['Arial', 'Times New Roman', 'Minion', 'Comic Sans'],
                    size: [8, 12, 14, 24, 32]
                };

                PresentationService.show = function(presid){
                    return $location.path('/show/' + presid);
                };

                PresentationService.videoUrlConversion = function (url) {
                    return $sce.trustAsResourceUrl(url);
                };

                return PresentationService;
            }
        ]);
})();