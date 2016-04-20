angular.module('webApp').factory('transcutservice', ['$http', '$q', function ($http, $q) {
    var c = {};
    
    var _getCuts = function (querywhere) {
        var deferred = $q.defer();
        $http.post("api/cut/list", querywhere).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
    c.getcuts = _getCuts;
    return c;
}]);