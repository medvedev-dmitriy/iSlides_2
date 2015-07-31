'use strict';

iSlidesApp.factory('PresentationService',[
    '$http',
    '$location',
    function($http, $location){
        var PresentationService = {};

        PresentationService.presentations = [];

        PresentationService.create = function(presentation){
            var index = PresentationService.presentations.length;
            PresentationService.presentations.push(presentation);
            console.log('create presentation');
            return $location.path('/presentation/edit/' + index);
        };

        return PresentationService;
    }
]);