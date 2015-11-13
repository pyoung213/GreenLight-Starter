describe('home', function() {
    describe('home.ctrl', function() {
        beforeEach(function() {
            module('ui.router');
            module('app.constants');
            module('app.pages');
        });

        var $scope;

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('HomeController', {
                accounts: []
            });
        }));

        it('loads the home page', function() {
            $scope.$digest();
        });
    });
});
