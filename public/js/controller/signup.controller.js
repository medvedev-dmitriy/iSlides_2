;(function() {
    angular.module('iSlidesApp')
        .controller('SignupController', SignupController);
    SignupController.$inject = [
        '$scope',
        '$location',
        '$http',
        'SignupService'];
    function SignupController($scope, $location, $http, SignupService) {
        $scope.signin = function () {
            $location.path('/')
        };

        $scope.signup = function (user) {
            SignupService.signup(user,
                function () {
                    $location.path('/profile');
                },
                function () {
                    $scope.errorMessage = 'Username is Not Available';
                });
        }
    }
})();

