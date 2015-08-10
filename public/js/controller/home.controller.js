;(function() {
    'use strict';
    angular.module('iSlidesApp')
        .controller('HomeController',HomeController);
    HomeController.$inject = [
        '$scope',
        '$http',
        '$location',
        '$timeout',
        'HomeService',
        'LoginService',
        'PresentationService'];

    function HomeController($scope, $http, $location, $timeout, HomeService, LoginService, PresentationService) {

        $scope.logout = function () {
            $scope.presentations = [];
            PresentationService.presentations = [];
            return LoginService.logout();
        };

        $scope.createPresentation = function () {
            $location.path('/create');
        };

        $scope.loadPresentation = function(user){
            return HomeService.loadPresentation(user,
                    function(data){
                        PresentationService.presentations = data;
                        console.log(PresentationService.presentations);
                        $scope.presentations = PresentationService.presentations;
                    },
                    function(err){
                        PresentationService.presentations = [];
                        $scope.presentations = PresentationService.presentations;
                    });
        };

        $scope.deletePresentation = function(id,index){
            HomeService.deletePresentation(id,index);
            $scope.presentations = PresentationService.presentations;
        }
    }
})();