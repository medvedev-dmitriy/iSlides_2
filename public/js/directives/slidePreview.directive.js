;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .directive('slidePreview',slidePreview);

    function slidePreview(){
        return {
            restrict: 'E',
            templateUrl: '/js/templates/slide-preview.html'
        }
    }
})();