angular
    .module('app.core')
    .factory('Api', Api);

function Api(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('/api/v1');
    });
}
