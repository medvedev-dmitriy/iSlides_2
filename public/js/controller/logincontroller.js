'use strict';

var app = angular.module('clientApp');

app.controller('MainCtrl', function ($scope, $location) {
    $scope.login = function () {
        return $location.path('/');
    };

    $scope.signup = function () {
        return $location.path('/signup');
    };
});

app.controller('signupCtrl', function ($scope, $location) {
    $scope.signin = function () {
        $location.path('/')
    };
});
