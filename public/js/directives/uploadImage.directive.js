;(function(){
    angular.module('iSlidesApp')
        .directive('uploadImage',uploadImage);

    function uploadImage(){
        return {
            restrict: 'E',
            template: '<div class="btn btn-success" ' +
            'ng-file-select ng-multiple="true" ' +
            'title="upload" resetOnClick="true" ' +
            'ng-model="files">Image</div>'
        }
    }
})();