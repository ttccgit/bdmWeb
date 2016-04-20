﻿
angular.module('webApp').controller('logOutContrl', ['$scope', 'logOutservice', function ($scope, logOutservice) {


    $scope.initPopover = function () {
        page.init();
    }

    $scope.queryWhere = {
        pageIndex: 1,
        pageSize: 10
    };

    $scope.$watch('queryWhere.Email', function (newValue, oldValue) {
        if (newValue != oldValue) {
            loadCuts();
        }
    });

    $scope.$watch('queryWhere.Mobile', function (newValue, oldValue) {
        if (newValue != oldValue) {
            loadCuts();
        }
    });

    $scope.$watch('queryWhere.MemberId', function (newValue, oldValue) {
        if (newValue != oldValue) {
            loadCuts();
        }
    });

    $scope.$watch('queryWhere.StringId', function (newValue, oldValue) {
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
        logOutservice.getLogOuts($scope.queryWhere).then(function (response) {
            $scope.logOut = response.Items;
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