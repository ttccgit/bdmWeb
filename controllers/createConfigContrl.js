angular.module('webApp').controller('createConfigContrl', ['$scope', 'configservice', function ($scope, configservice) {

    $scope.model = {
        Key: "",
        IntValue: 0,
        StringValue: "",
        CreateTime: "1900-1-1",
        UpdateTime: "1900-1-1"
    };

    $scope.create = function () {
        var model = $scope.model;
        if (model.key == "" || model.key == null) {
            Messenger().post("key不能为空！");
        } else if (model.IntValue == null&&(model.StringValue == null || model.StringValue == "")) {
            Messenger().post("IntValue和StringValue至少有一个值！");
        }  else {
            loadCuts();
        }
       
    }

    var loadCuts = function () {
        configservice.createconfig($scope.model).then(function (response) {
            if (response > 0) {
                Messenger().post("新增成功！");
            } else {
                Messenger().post("新增失败！");
            }
        });
    }
}]);