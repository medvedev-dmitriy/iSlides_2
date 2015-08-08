;(function() {
    'use strict';

    angular.module('iSlidesApp')
        .factory('PresentationService', [
            '$http',
            '$location',
            function ($http, $location) {
                var PresentationService = {};

                PresentationService.presentations = [];

                PresentationService.save = function(slides, user, index){
                    PresentationService.presentations[index] = slides;
                    $http.post('/presentationUpdate', {
                        presentation:{
                            context: JSON.stringify(slides),
                            user: user,
                            presid: index }
                    })
                        .success(console.log('success http save'))
                        .error(console.log('error http save'));
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

                return PresentationService;
            }
        ]);
})();