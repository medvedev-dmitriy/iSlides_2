'use strict';

var iSlidesApp = angular.module('iSlidesApp', ['ngRoute']);

iSlidesApp.config(['$routeProvider',
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
            controller: 'LoginCtrl'
          })
          .when('/profile',{
              templateUrl: 'partials/home.html',
              controller: 'HomeCtrl',
              resolve: {
                  loggedin: checkLoggedin
              }
          })
          .when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'SignupCtrl'
          })
          .when('/create', {
                templateUrl: 'partials/create.html',
                controller: 'PresentationCtrl',
                resolve: {
                    loggedin: checkLoggedin
                }
          })
          //.otherwise({
          //  redirectTo: '/'
          //});
    }]);
    