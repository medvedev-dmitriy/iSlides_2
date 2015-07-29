
'use strict';

angular.module('clientApp', ['ngRoute'])
    .config(function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'js/view/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'js/view/signup.html',
        controller: 'signupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});

var profileApp = angular.module('profileApp', ['ngRoute']);

profileApp.config(function ($routeProvider) {
   $routeProvider
       .when('/create',{
           templateUrl: 'partials/create.html',
           controller: 'CreateCtrl'
       })
       .otherwise({
           templateUrl: 'partials/home.html',
           controller: 'HomeCtrl'
       })
});

var createApp = angular.module('createApp', ['ngRoute']);

createApp.config(function ($routeProvider){
   $routeProvider
       .when('/create',{
           templateUrl: 'partials/create.html',
           controller: 'CreateCtrl'
       })
       .otherwise({
           templateUrl: 'partials/create.html',
           controller: 'CreateCtrl'
       })
});