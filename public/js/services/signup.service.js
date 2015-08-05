;(function() {
    'use strict';

    angular.module('iSlidesApp')
        .factory('SignupService', [
            '$http',
            function ($http) {
                var signupService = {};
                signupService.signup = function (newUser, success, err) {
                    $http.post('/signup', newUser)
                        .success(success)
                        .error(err)
                };

                return signupService;
            }
        ]);
})();
