;(function(){
    angular.module('iSlidesApp')
        .directive('addText',addText);

    function addText(){
        return {
            restrict: 'E',
            templateUrl: '/js/templates/add-text.html'
        }
    }
})();