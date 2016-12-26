//// build 依然使用此代码
G = {
  views: 'src/views'
}
////
var  RM = angular.module('app', ['ngCookies', 'ui.router','ui.bootstrap']);
//
////
angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
      //
      // Now set up the states
      $stateProvider
        .state('app', {
          url: "/",
          views: {
            'header': {
              templateUrl: G.views+'/header.html',
              controller: 'headCtrl'
            },
            'footer': {templateUrl: G.views+'/footer.html'},
            '': {template: '<div ui-view></div>'}
          }
        })
        .state('app.home', {
          url: "home",
          templateUrl: G.views+"/home.html",
            controller:'homeCtrl'
        })
        //.state('app.activities', {
        //  url: "activities",
        //  templateUrl: G.views+"/activities.html",
        //  controller: 'activitiesCtrl'
        //})
        //.state('app.activity', {
        //  url: "activities/:id",
        //  templateUrl: G.views+"/activity.html",
        //  controller: 'activityCtrl'
        //})
        //.state('app.userAccount', {
        //  url: "userAccount",
        //  templateUrl: G.views+"/userAccount.html",
        //  controller: 'userAccountCtrl'
        //})
        //.state('app.userRecords', {
        //  url: "userRecords",
        //  templateUrl: G.views+"/userRecords.html",
        //  controller: 'userRecordsCtrl'
        //})
        //  .state('app.download', {
        //    url: "download",
        //    templateUrl: G.views+"/download.html",
        //    controller: 'downloadCtrl'
        //  })
        //  .state('app.casus', {
        //      url: "casus",
        //      templateUrl: G.views+"/casus.html",
        //      controller: 'casusCtrl'
        //  })
        //  .state('app.casusDetail', {
        //    url: "casusDetail/:id",
        //    templateUrl: G.views+"/casusDetail.html",
        //    controller: 'casusDetailCtrl'
        //  });
  }])
////
////
angular.module('app').run(['$rootScope',
  function($rootScope){

    //if (!ConfigService.config()){ ConfigService.request(); }
    //if (!AuthService.hasLogin()){ AuthService.login(); }

    // $rootScope.$watch(ConfigService.config, function(newVal){
    //   console.log(' newVal ---  ', newVal);
    // })

  }])

