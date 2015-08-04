;(function() {
    'use strict';
    angular.module('iSlidesApp')
        .controller('LoginController', LoginController);
    LoginController.$inject = [
        '$scope',
        '$location',
        '$http',
        'LoginService'];

    function LoginController($scope, $location, $http, LoginService) {
        $scope.login = function (user) {
            LoginService.login(user,
                function () {
                    $location.path('/profile');
                },
                function () {
                    $scope.errorMessage = 'Invalid name or password';
                }
            );
        };
        $scope.signup = function () {
            return $location.path('/signup');
        };
    }
})();


