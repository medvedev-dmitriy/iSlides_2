;(function(){
    angular.module('iSlidesApp')
        .directive('backgroundColor',backgroundColor);

    function backgroundColor(){
        return {
            restrict: 'E',
            templateUrl: '/js/templates/background-color.html'
        }
    }
})();