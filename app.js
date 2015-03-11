(function (){
  "use strict";
  angular.module ('dvine', [
    'ngRoute',
    'ngAnimate',
    'uiGmapgoogle-maps',
    'user',
    'admin'
  ])
  .config(function ($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/splash.html',
      controller: 'MaiinController as mainCtrl'
    })
    .when('/plan'{
      templateUrl: 'user/views/plan.html'
      controller: 'MainContoller as mainCtrl'
  })
  .when('map' {
    templateUrl: 'user/views/user.map.html'
  })
  .when('/restInfo' {
    templateUrl: 'user/views/user.restraurants.html'
  })
  .when('/admin'{
    templateUrl: 'admin/admin.html'
    controller: 'MainController as mainCtrl'
  })
})
