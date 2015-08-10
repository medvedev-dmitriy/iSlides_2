;(function() {
    'use strict';

    angular.module('iSlidesApp')
        .factory('LoginService', [
            '$http',
            '$location',
            '$rootScope',
            function ($http, $location, $rootScope) {
                var loginService = {};
                loginService.login = function (user, success, err) {
                    $http.post('/login', user)
                        .success(success)
                        .error(err)
                };

                loginService.logout = function () {
                    $rootScope = [];
                    console.log($rootScope);
                    $http.get('/logout');
                    $location.path('/');
                };

                return loginService;
            }

        ])
})();
