angular.module('webApp').factory('updateerrservice', ['$http', '$q', function ($http, $q) {
    var c = {};

    var _geterrs = function (querywhere) {
        var deferred = $q.defer();
        $http.post("api/updateErr/list", querywhere).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
    c.getUpdateerrs = _geterrs;
    return c;
}]);