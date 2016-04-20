
angular.module('webApp').controller('indexContrl', ['$scope', 'userservice', 'authService', '$location', function ($scope, userservice, authService, $location) {
    $scope.$on('$viewContentLoaded', function () {
        page.init(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
  //  userservice.getuser();
    $scope.username = authService.authentication.userName;

    $scope.logout = function () {
        authService.logOut();
    }
}]);

angular.module('webApp').controller('homeContrl', ['$scope', function ($scope) {
    $scope.abc = "ds";
   
}]);