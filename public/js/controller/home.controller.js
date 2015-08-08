;(function() {
    'use strict';
    angular.module('iSlidesApp')
        .controller('HomeController',HomeController);
    HomeController.$inject = [
        '$scope',
        '$http',
        '$location',
        'HomeService',
        'LoginService',
        'PresentationService'];

    function HomeController($scope, $http, $location, HomeService, LoginService, PresentationService) {
        $scope.logout = function () {
            $scope.presentations = [];
            PresentationService.presentations = [];
            return LoginService.logout();
        };

        $scope.presentations = PresentationService.presentations;

        $scope.createPresentation = function () {
            $location.path('/create');
        };

        $scope.loadPresentation = function(user){
            return HomeService.loadPresentation(user,
                    function(data){
                        console.log(data);
                        PresentationService.presentations = data;
                        $scope.presentations = PresentationService.presentations;
                    },
                    function(err){
                        PresentationService.presentations = [];
                        $scope.presentations = PresentationService.presentations;
                    });
        };
    }
})();