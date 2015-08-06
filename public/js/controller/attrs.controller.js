;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .controller('AttrsController',AttrsController);

    AttrsController.$inject = [
        '$scope',
        '$attrs',
        'AttrsService'
    ];

    function AttrsController($scope, $attrs, AttrsService){
        $scope.getStyle = function ($index){
            $scope.$emit('style', AttrsService.getStyle($index, $attrs));
        }
    }
})();