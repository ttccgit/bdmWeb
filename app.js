/// <reference path="bower_components/angular/angular.js" />

var webApp = angular.module('webApp', ['ui.router', 'oc.lazyLoad', 'LocalStorageModule']);
webApp.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "templetes/home.html",
            data: { pageTitle: '首页', pageSubTitle: 'statistics & reports' },
            controller: "homeContrl"
        })
        .state('login', {
            url: "/login",
            templateUrl: "templetes/login.html",
            data: { pageTitle: '登陆页', pageSubTitle: 'statistics & reports' },
            controller: "logincontroller",
            resolve: {
                do: [
                    '$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                'css/signin.css',
                                'controllers/loginContrl.js'
                            ]
                        });
                    }
                ]
            }
        })
        .state('cuts', {
            url: "/cuts",
            templateUrl: "templetes/transcut.html",
            data: { pageTitle: '段维护', pageSubTitle: 'statistics & reports' },
            controller: "transCutCtroller",
            resolve: {
                do: [
                    '$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                'services/transcutService.js',
                                'controllers/transcutContrl.js'
                            ]
                        });
                    }
                ]
            }
        })
        .state('transErr', {
            url: "/transErr",
            templateUrl: "templetes/transerr.html",
            data: { pageTitle: '异常维护', pageSubTitle: 'statistics & reports' },
            controller: "transErrCtroller",
            resolve: {
                do: [
                    '$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                'services/transerrService.js',
                                'controllers/transerrContrl.js'
                            ]
                        });
                    }
                ]
            }
        })
        .state('registErr', {
            url: "/registErr",
            templateUrl: "templetes/registerr.html",
            data: { pageTitle: '注册异常维护', pageSubTitle: 'statistics & reports' },
            controller: "registerrContrl",
            resolve: {
                do: [
                    '$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                'services/registerrService.js',
                                'controllers/registerrContrl.js'
                            ]
                        });
                    }
                ]
            }
        })
        .state('updateErr', {
            url: "/updateErr",
            templateUrl: "templetes/updateerr.html",
            data: { pageTitle: '更新异常维护', pageSubTitle: 'statistics & reports' },
            controller: "updateerrContrl",
            resolve: {
                do: [
                    '$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                'services/updateerrService.js',
                                'controllers/updateerrContrl.js'
                            ]
                        });
                    }
                ]
            }
        })
        .state('logOutErr', {
            url: "/logOutErr",
            templateUrl: "templetes/logOuterr.html",
            data: { pageTitle: '登出异常维护', pageSubTitle: 'statistics & reports' },
            controller: "logOuterrContrl",
            resolve: {
                do: [
                    '$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                'services/logOuterrService.js',
                                'controllers/logOuterrContrl.js'
                            ]
                        });
                    }
                ]
            }
        })
    .state('config', {
        url: "/config",
        templateUrl: "templetes/config.html",
        data: { pageTitle: '配置维护', pageSubTitle: 'statistics & reports' },
        controller: "configContrl",
        resolve: {
            do: [
                '$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'services/configService.js',
                            'controllers/configContrl.js'
                        ]
                    });
                }
            ]
        }
    })

     .state('createConfig', {
         url: "/createConfig",
         templateUrl: "templetes/createConfig.html",
         data: { pageTitle: '新增配置', pageSubTitle: 'statistics & reports' },
         controller: "createConfigContrl",
         resolve: {
             do: [
                 '$ocLazyLoad', function ($ocLazyLoad) {
                     return $ocLazyLoad.load({
                         insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                         files: [
                             'services/configService.js',
                             'controllers/createConfigContrl.js'
                         ]
                     });
                 }
             ]
         }
     })
      .state('editConfig', {
          url: "/editConfig",
          templateUrl: "templetes/editConfig.html",
          data: { pageTitle: '编辑配置', pageSubTitle: 'statistics & reports' },
          controller: "editconfigContrl",
          resolve: {
              do: [
                  '$ocLazyLoad', function ($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                          files: [
                              'services/configService.js',
                              'controllers/editconfigContrl.js'
                          ]
                      });
                  }
              ]
          }
      })
       .state('logOut', {
           url: "/logOut",
           templateUrl: "templetes/logOut.html",
           data: { pageTitle: '登出维护', pageSubTitle: 'statistics & reports' },
           controller: "logOutContrl",
           resolve: {
               do: [
                   '$ocLazyLoad', function ($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                           files: [
                               'services/logOutService.js',
                               'controllers/logOutContrl.js'
                           ]
                       });
                   }
               ]
           }
       })
    $ocLazyLoadProvider.config({
        debug: true,
        events: true
    });
}]);
var serviceBase = 'http://localhost:8080/bdm/api/v1';
webApp.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

webApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

webApp.run(['authService', '$location', '$rootScope', "$state", function (authService, $location, $rootScope, $state) {
    authService.fillAuthData();
    $rootScope.user = authService.authentication;
    $rootScope.user.logout = authService.logOut;
    $rootScope.$state = $state
    $rootScope.menu = ["test","2","3"];
    $location.path('/');
}]);