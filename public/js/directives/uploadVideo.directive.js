;(function(){
    angular.module('iSlidesApp')
        .directive('uploadVideo',uploadVideo);

    function uploadVideo(){
        return {
            restrict: 'E',
            templateUrl: '/js/templates/upload-video.html'
        }
    }
})();