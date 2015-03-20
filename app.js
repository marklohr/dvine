(function (){
  "use strict";

  angular.module('dvine', [
     'ngRoute',
     'ngAnimate',
     'uiGmapgoogle-maps',
     'usermain',
  // 'ngCookies',
//   'ngResource',
//   'ngSanitize'
  ])
  .config(function ($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      //controller: 'MainCtrl'      This is what mapDemo has instead of line below
      controller: 'MainController as mainCtrl'
    })
    // .when('/map', {
    //   templateUrl: '/user/views/map.html'
    // })
    .when('/not-found', {
      templateUrl: 'views/notfound.html',
      controller: 'MainController as mainCtrl'
    })
  });

})();
