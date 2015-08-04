;(function(){
    angular.module('iSlidesApp')
        .directive('addFigures',addFigures);

    function addFigures(){
        return {
            restrict: 'E',
            templateUrl: '/js/templates/add-figures.html'
        }
    }
})();