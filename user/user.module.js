 (function () {
   "use strict";

   angular.module('usermain', [
     'ngRoute',
     'ngAnimate'
   ])

   .config(function($routeProvider){
     $routeProvider
    // .when('/list', {
    //   templateUrl: '/user/view/user.restuarants.html',
    //   controller: 'RestuarantController as restCtrl'
    //})
     .when('/map', {
       templateUrl: '/user/views/map.html',
       controller: 'MapController as mapCtrl'
     })
  //    .when('/favorites', {
  //    templateUrl: '/user/views/user.favorites.html',
  //    controller: 'RestaurantController as restCtrl'
  //  })
    .when('/details/:restaurantId', {
      templateUrl: '/user/views/user.restaurantdetail.html',
      controller: 'RestaurantController as restCtrl'
    })
   });

 }) ();
