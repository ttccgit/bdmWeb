
angular.module('webApp').controller('registerrContrl', ['$scope', 'registerrservice', function ($scope, registerrservice) {
    

    $scope.initPopover = function () {
        page.init();
    }

    $scope.queryWhere = {
        pageIndex: 1,
        pageSize: 10
    };

    $scope.$watch('queryWhere.errType', function (newValue, oldValue) {
        if (newValue != oldValue) {
            loadCuts();
        }
    });

    $scope.$watch('queryWhere.registStatus', function (newValue, oldValue) {
        if (newValue != oldValue) {
            loadCuts();
        }
    });

    $scope.$watch('queryWhere.errMemberId', function (newValue, oldValue) {
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


    var loadCuts = function () {
        registerrservice.getRegisterrs($scope.queryWhere).then(function (response) {
            $scope.registErr = response.Items;
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
    }

    $scope.older = function () {
        if ($scope.queryWhere.pageIndex == 1) {
            return;
        }
        $scope.queryWhere.pageIndex = $scope.queryWhere.pageIndex - 1;
        loadCuts();
    }

    $scope.newer = function () {
        if ($scope.queryWhere.pageIndex == $scope.page.maxPage) {
            return;
        }
        $scope.queryWhere.pageIndex = $scope.queryWhere.pageIndex + 1;
        loadCuts();
    }

    loadCuts();
}]);