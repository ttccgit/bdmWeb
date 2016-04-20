
angular.module('webApp').controller('logincontroller', ['$scope', 'authService',  function ($scope, authService) {
    $scope.loginData = {
        userName: "",
        password: "",
        useRefreshTokens: false
    };
    $scope.login = function () {

        var promist = authService.login($scope.loginData);
        promist.then(function (response) {

        },
         function (err) {
             $scope.message = err.error_description;
         });
    };

    $scope.abc = "ds";
}]);