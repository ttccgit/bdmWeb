
angular.module('webApp').controller('configContrl', ['$scope', 'configservice', function ($scope, configservice) {
    $scope.queryWhere = {
        pageIndex: 1,
        pageSize: 10
    };

    $scope.$watch('queryWhere.key', function (newValue, oldValue) {
        if (newValue != oldValue) {
            loadCuts();
        }
    });


    $scope.style = {
        older: 'previous disabled',
        newer: 'next'
    };

    $scope.page = {
        curPage: 1,
        maxPage: 0
    };

    var loadCuts = function() {
        configservice.getconfig($scope.queryWhere).then(function(response) {
            $scope.configs = response.Items;
            $scope.page.curPage = response.CurrentPage;
            $scope.page.maxPage = response.TotalPages;

            if (response.CurrentPage == 1) {
                $scope.style.older = 'previous disabled';
            } else {
                $scope.style.older = 'previous';
            }

            if (response.CurrentPage == response.TotalPages) {
                $scope.style.newer = 'next disabled';
            } else {
                $scope.style.newer = 'next';
            }
        });
    };

    $scope.older = function() {
        if ($scope.queryWhere.pageIndex == 1) {
            return;
        }
        $scope.queryWhere.pageIndex = $scope.queryWhere.pageIndex - 1;
        loadCuts();
    };

    $scope.newer = function() {
        if ($scope.queryWhere.pageIndex == $scope.page.maxPage) {
            return;
        }
        $scope.queryWhere.pageIndex = $scope.queryWhere.pageIndex + 1;
        loadCuts();
    };
    $scope.editconfig = function(c) {
        configservice.currEdit = c;

    };
    $scope.deleteconfig = function (c) {
        if (confirm('确定要删除吗？')) {
            if (c.Key == null) {
                Messenger().post("Key不能为空！");
            } else {
                configservice.deleteconfig(c).then(function (response) {
                    if (response > 0) {
                        Messenger().post("删除成功！");
                        loadCuts();
                    } else {
                        Messenger().post("删除失败！");
                    }
                });
            }
        }
     
    };
    loadCuts();
}]);

