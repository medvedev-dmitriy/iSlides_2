;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .factory('AttrsService',AttrsService);

    AttrsService.$inject = [];

    function AttrsService(){
        var AttrsService = {};

        AttrsService.getStyle = function(index, $attrs, selectedSlide){
            return {
                index: index,
                style: $attrs.$$element[0].attributes[4].value,
                selectedSlide: selectedSlide
            };
        };

        return AttrsService;
    }
})();