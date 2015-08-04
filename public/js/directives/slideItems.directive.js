;(function(){
    angular.module('iSlidesApp')
        .directive('slideItems',slideItems);

    function slideItems(){
        return {
            restrict: 'E',
            templateUrl: '/js/templates/slide-items.html'
        }
    }
})();
