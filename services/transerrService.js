angular.module('webApp').factory('transerrservice', ['$http', '$q', function ($http, $q) {
    var c = {};

    var _geterrs = function (querywhere) {
        var deferred = $q.defer();
        $http.post("api/transErr/list", querywhere).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
    c.geterrs = _geterrs;
    return c;
}]);