  (function () {
    "use strict";

    angular.module('dvine', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: '/client/main.html',
        controller: 'MainController as mainCtrl'
      })
    })

  })();
