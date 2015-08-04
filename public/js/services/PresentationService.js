'use strict';

iSlidesApp.factory('PresentationService',[
    '$http',
    '$location',
    function($http, $location){
        var PresentationService = {};

        PresentationService.presentations = [];

        PresentationService.tools = ['Text','Rectangle','Video','Circle'];

        PresentationService.create = function(presentation){
            var index = PresentationService.presentations.length;
            PresentationService.presentations.push(presentation);
            return $location.path('/presentation/edit/' + index);
        };

        return PresentationService;
    }
]);