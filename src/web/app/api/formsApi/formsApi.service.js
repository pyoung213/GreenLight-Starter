angular
    .module('app.api')
    .service('FormsApi', FormsApi);

function FormsApi(ApiHelper) {
    return ApiHelper.createApi('forms');
}
