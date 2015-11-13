angular
    .module('app.pages')
    .config(function($stateProvider, routes) {
        $stateProvider
            .state(routes.HOME, {
                url: '/',
                templateUrl: 'home.html',
                controller: 'HomeController as vm'
            });
    });
