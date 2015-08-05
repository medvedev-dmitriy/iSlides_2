;(function() {
    'use strict';

    angular.module('iSlidesApp')
        .factory('PresentationService', [
            '$http',
            '$location',
            function ($http, $location) {
                var PresentationService = {};

                PresentationService.presentations = [];

                PresentationService.create = function (presentation) {
                    var index = PresentationService.presentations.length;
                    PresentationService.presentations.push(presentation);
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