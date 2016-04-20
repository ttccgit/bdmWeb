angular.module('webApp').factory('registerrservice', ['$http', '$q', function ($http, $q) {
    var c = {};

    var _geterrs = function (querywhere) {
        var deferred = $q.defer();
        $http.post("api/registErr/list", querywhere).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
    c.getRegisterrs = _geterrs;
    return c;
}]);