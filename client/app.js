  (function () {
    "use strict";

    angular.module('dvine', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/list', {
        templateUrl: '/rest.list.html',
        controller: 'RestController as restCtrl'
      })
      .when('/detail', {
        templateUrl: '/client/rest.detail.html',
        controller: 'RestController as restCtrl'
      })
      .when('/edit', {
        templateUrl: '/client/rest.edit.html',
      })
      .when('/addrest', {
        templateUrl: '/client/add.rest.html',
        controller: 'RestaurantController as restCtrl'
      })
      .when('/collection', {
        templateUrl: '/collection.html',
        controller:'RestaurantController as restCtrl'
      })

    });

  })();
