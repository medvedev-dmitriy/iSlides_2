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
        $scope.isShown = true;
        $scope.toggle = function () {
            $scope.animation = 'toggle';
            for (var i = 0; i < $scope.presentations.length; i++) {
                $timeout(function () {
                    $scope.list.push($scope.presentations[i]);
                }, 100 * i);
            };
        };
        $scope.show = function (){
            $scope.isShow = !$scope.isShow;
        }
        $scope.cleanList = function () {
            for (var i = 0; i < $scope.list.length; i++) {
                $timeout(function () {
                    $scope.list.pop();
                }, 100 * i);
            };
        };

        $scope.list = [];
        $scope.currentAnimation;
        $scope.animations = ["toggle",
            "spin-toggle",
            "scale-fade",
            "scale-fade-in",
            "bouncy-scale-in",
            "flip-in",
            "slide-left",
            "slide-right",
            "slide-top",
            "slide-down",
            "bouncy-slide-left",
            "bouncy-slide-right",
            "bouncy-slide-top",
            "bouncy-slide-down",
            "rotate-in"];

        $scope.addItem = function (animation) {

        };

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

        $scope.deletePresentation = function(id){
            return HomeService.deletePresentation(id);
        }
    }
})();