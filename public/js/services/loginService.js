iSlidesApp.factory('LoginService',[
    '$http',
    '$location',
    function($http, $location){
        var loginService = {};
        loginService.login = function(user, success, err) {
            $http.post('/login', user)
                .success(success)
                .error(err)
        };

        loginService.logout = function(){
            $http.get('/logout');
            $location.path('/');
        };

        return loginService;
    }

]);
