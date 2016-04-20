
angular.module('webApp').controller('transCutCtroller', ['$scope', 'transcutservice', function ($scope, transcutservice) {
    $scope.queryWhere = {
        pageIndex: 1,
        pageSize: 10,
        year: 0,
        startId: 0,
        endId: 0
    };

    $scope.$watch('queryWhere.year', function (newValue, oldValue) {
        if (newValue != oldValue && newValue.length == 4) {
            loadCuts();
        }
    });

    $scope.$watch('queryWhere.startId', function (newValue, oldValue) {
        if (newValue != oldValue) {
            loadCuts();
        }
    });

    $scope.$watch('queryWhere.endId', function (newValue, oldValue) {
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

    var sleep = function sleep(numberMillis) {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
            now = new Date();
            if (now.getTime() > exitTime) return;
        }
    }

    var loadCuts = function () {
        transcutservice.getcuts($scope.queryWhere).then(function (response) {
            $scope.cuts = response.Items;
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