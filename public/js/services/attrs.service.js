;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .factory('AttrsService',AttrsService);

    AttrsService.$inject = [];

    function AttrsService(){
        var AttrsService = {};

        AttrsService.getStyle = function(index, $attrs){
            return $attrs.$$element[0].attributes[3].value;
        };

        return AttrsService;
    }
})();