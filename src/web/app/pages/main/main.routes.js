angular
    .module('app.pages')
    .config(function($stateProvider, routes) {
        $stateProvider
            .state(routes.MAIN, {
                abstract: true,
                templateUrl: 'main.html',
                controller: 'MainController as vm',
                unauthenticated: false
            });
    });
