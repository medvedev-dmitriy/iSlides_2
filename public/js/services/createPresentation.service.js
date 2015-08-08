;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .factory('CreatePresentationService', CreatePresentationService);

    CreatePresentationService.$inject = ['$http','$location','PresentationService'];

    function CreatePresentationService($http, $location, PresentationService){

    }
})();