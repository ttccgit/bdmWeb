angular.module('webApp').factory('logOutservice', ['$http', '$q', function ($http, $q) {
    var c = {};

    var _getinfos = function (querywhere) {
        var deferred = $q.defer();
        $http.post("api/logOut/list", querywhere).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
    c.getLogOuts = _getinfos;
    return c;
}]);