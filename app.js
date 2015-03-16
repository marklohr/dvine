(function (){
  "use strict";

  angular.module ('dvineApp', [
     'ngRoute'
     'ngAnimate',
     'uiGmapgoogle-maps',
    // //  'admin',
    //  'login',
    //  'usermain'
  ])
  .config(function ($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      // controller: 'MainController as mainCtrl'
    })
    .when('/map', {
      templateUrl: 'user/views/map.html'
 //     controller: 'MapController as mapCtrl'
   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'MainController as mainCtrl'
    //   })
    //   .when('/splash', {
    //     templateUrl: 'views/splash.html',
    //     controller: 'MainController as mainCtrl'
    //   })
    //   .when('/not-found', {
    //     templateUrl: 'views/404.html',
    //     controller: 'MainController as mainCtrl'
    //   })
    //   .when('/favorites', {
    //     templateUrl: 'front/front.favorites.html',
    //     controller: 'FavoriteController as favorite'
    //   })
    //   .otherwise({
    //     redirectTo: '/not-found'
    //   })
    // })
    // .constant('_', _)


  })();












// //   .when('/restInfo' {
//     templateUrl: 'user/views/user.restraurants.html'
//   })
//   .when('/admin'{
//     templateUrl: 'admin/admin.html'
//     controller: 'MainController as mainCtrl'
//   })
 });

}) ();
