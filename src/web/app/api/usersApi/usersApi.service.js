angular
    .module('app.api')
    .service('UsersApi', UsersApi);

function UsersApi(ApiHelper) {
    return ApiHelper.createApi('users');
}
