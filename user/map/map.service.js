
(function (){
  "use strict";

// What I had
//   angular.module('usermain', [
//      'ngRoute',
//      'ngAnimate',
//      'uiGmapgoogle-maps'
//   ])
//   .config(function ($routeProvider){
//     $routeProvider
//     .when('/map', {
//       templateUrl: 'user/views/map.html'
//     })
//
// });
//
//   })();
  angular.module('usermain')
  .factory('RestaurantService', function($location, $http, $routeParams) {

    var url = 'https://d-vine.herokuapp.com';


    //admin CRUD//

    var getSingleRestaurant = function(id){
      return $http.get(url + '/' + id);
    };

    var getAllRestaurants = function () {
      console.log('getting restaurants');
      return $http.get(url);
    };

    var addRestaurant = function (restaurant) {
      restaurant.comments = [];
      $http.post(rul, restaruant).success(function() {
        $location.path('/map');
      });
    };

    var deleteRestaurant = function (id) {
      $http.delete(url + '/map' + id)
    };

    var editARestaurant = function (product, id) {
      $http.put(url + '/map' + id, restaurant).success(function(){
        $location.path('/admin/adminRestaurants')
      });
    }

      // API //
      return {
        getRestaurant: getSingleRestaurant,
        getRestaurants: getAllRestaurants,
        addNewRestaurant: addRestaurant,
        deleteRestuarant: deleteRestaurant,
        editRestaurant: editARestaurant
      };
  });
})();
