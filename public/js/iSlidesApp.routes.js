;(function(){
    'use strict';

    angular.module('iSlidesApp')
        .config(['$routeProvider',
            function ($routeProvider) {

                var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
                    var deferred = $q.defer();
                    $http.get('/isloggedin')
                        .success(function(user){
                            if (user !== '0') {
                                $rootScope.user = user;
                                deferred.resolve();
                            } else {
                                deferred.reject();
                                console.log("checkLog");
                                $location.url('/');
                            }
                        })
                        .error(function(){
                            console.log("Error");
                        });
                    return deferred.promise;
                };


                $routeProvider
                    .when('/', {
                        templateUrl: 'partials/login.html',
                        controller: 'LoginController'
                    })
                    .when('/profile',{
                        templateUrl: 'partials/home.html',
                        controller: 'HomeController',
                        resolve: {
                            loggedin: checkLoggedin
                        }
                    })
                    .when('/signup', {
                        templateUrl: 'partials/signup.html',
                        controller: 'SignupController'
                    })
                    .when('/presentation/edit/:index', {
                        templateUrl: 'partials/presentationEdit.html',
                        controller: 'PresentationController',
                        resolve: {
                            loggedin: checkLoggedin
                        }
                    })
                    .when('/create', {
                        templateUrl: 'partials/create.html',
                        controller: 'PresentationController',
                        resolve: {
                            loggedin: checkLoggedin
                        }
                    })
                    .when('/file',{
                        templateUrl: 'partials/file-upload.html',
                        controller: 'PhotoUploadController'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }])
})();