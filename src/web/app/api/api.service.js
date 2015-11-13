angular
    .module('app.api')
    .factory('Api', Api);

function Api(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('/api/v1');
    });
}
