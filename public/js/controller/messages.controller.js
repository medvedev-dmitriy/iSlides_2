;(function(){
    angular.module('iSlidesApp')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['$scope','$log','$timeout'];

    function MessagesController(){
        var vm = this;

        vm.deleteItem = function(){
            console.log('delete');
        }
    }
})();