angular.module('webApp').controller('editconfigContrl', ['$scope', 'configservice', function ($scope, configservice) {

    $scope.model = configservice.currEdit;

    $scope.edit = function() {
        var model = $scope.model;
        if (model.IntValue == null&&(model.StringValue == null || model.StringValue == "")) {
            Messenger().post("IntValue和StringValue至少有一个值！");
        }  else {
            loadCuts();
        }

    };

    

    var loadCuts = function () {
        configservice.editconfig($scope.model).then(function (response) {
            if (response > 0) {
                Messenger().post("修改成功！");
                //$state.go("config", {}, { reload: true });
                //$q.defer().resolve(response);
                //$location.path('/config');
                //$window.history.back();
            } else {
                Messenger().post("修改失败！");
            }
        });
    }
}]);