'use strict';

iSlidesApp.controller('LoginCtrl',[
    '$scope',
    '$location',
    '$http',
    'LoginService',
    function ($scope, $location, $http, LoginService) {
        $scope.login = function (user) {
            LoginService.login(user,
                function(){
                    $location.path('/profile');
                },
                function(){
                    $scope.errorMessage = 'Invalid name or password';
                }
            );
        };
        $scope.signup = function () {
            return $location.path('/signup');
        };
}]);


