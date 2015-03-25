  (function () {
    "use strict";

    angular.module('dvine', [
      'ngRoute',
      // // 'ngAnimate',
      // 'uiGmapgoogle-maps',
      // 'usermain'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/list', {
        templateUrl: '/restaurant/rest.list.html',
        controller: 'RestController as restCtrl'
      })
      .when('/detail', {
        templateUrl: '/restaurant/rest.detail.html',
        controller: 'RestController as restCtrl'
      })
      .when('/collection', {
        templateUrl: '/restaurant/add.rest.html',
        controller: 'RestController as restCtrl'
      })
      .when('/add', {
        templateUrl: '/restaurant/add.rest.html',
        controller: 'restController as restCtrl'
      })
      .when('/add/:restaurantId', {
        templateUrl: '/restaurant/add.rest.html',
        controller: 'RestController as restCtrl'
      })
      //I don't currently need this because when I hit "Edit" on the "list" page, a form appears. I click "Add", rather than "Edit" to submit the information
      // .when('/edit', {
      //   templateUrl: '/restaurant/rest.edit.html',
      //   controller: 'RestaurantController as restCtrl'
      // })
      // .when('/address', {
      //   templateUrl: '/restaurant/add.rest.html',
      //   controller: 'RestaurantController as restCtrl'
      // })
      // .when('/collection', {
      //   templateUrl: '/collection.html',
      //   controller:'RestaurantController as restCtrl'
       //})
       .when('/', {
         templateUrl: '/views/main.html',

       })

    });

  })();
