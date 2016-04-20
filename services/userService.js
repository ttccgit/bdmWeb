angular.module('webApp').factory('userservice', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {
    var user = {};
    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var _getuser = function () {
        return $http.get(serviceBase + '/api/users/current').then(function (response) {
            return response;
        });
    }

    user.getuser = _getuser;
    return user;
}]);