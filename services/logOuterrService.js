angular.module('webApp').factory('logOuterrservice', ['$http', '$q', function ($http, $q) {
    var c = {};

    var _geterrs = function (querywhere) {
        var deferred = $q.defer();
        $http.post("api/logOutErr/list", querywhere).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
    c.getLogOuterrs = _geterrs;
    return c;
}]);