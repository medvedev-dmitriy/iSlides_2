
'use strict';

angular.module('clientApp', [
    'ngRoute'
])
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

