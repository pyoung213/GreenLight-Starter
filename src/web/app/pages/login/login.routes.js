angular
    .module('app.pages')
    .config(function($stateProvider, routes) {
        $stateProvider
            .state(routes.LOGIN, {
                url: '/login',
                templateUrl: 'login.html',
                controller: 'LoginController as vm',
                unauthenticated: true
            });
    });
