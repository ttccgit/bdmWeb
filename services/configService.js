angular.module('webApp').factory('configservice', ['$http', '$q', function ($http, $q) {
    var c = {};

    var _getconfig = function(querywhere) {
        var deferred = $q.defer();
        $http.post("api/config/list", querywhere).success(function(response) {
            deferred.resolve(response);
        }).error(function(err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };
    var _createConfig = function(querywhere) {
        var deferred = $q.defer();
        $http.post("api/config/create", querywhere).success(function(response) {
            deferred.resolve(response);
        }).error(function(err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };
    var _editConfig = function(querywhere) {
        var deferred = $q.defer();
        $http.post("api/config/edit", querywhere).success(function(response) {
            deferred.resolve(response);
        }).error(function(err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };
    var _deleteConfig = function (querywhere) {
        var deferred = $q.defer();
        $http.post("api/config/delete", querywhere).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };
    c.deleteconfig = _deleteConfig;
    c.editconfig = _editConfig;
    c.createconfig = _createConfig;
    c.getconfig = _getconfig;
    c.currEdit = {};
    return c;
}]);

