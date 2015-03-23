  // (function () {
  //   "use strict";
  //   angular.module('dvine')
  //   .factory('RestaurantService', function($http, $rootScope, $routeParams) {
  //
  //     var url = 'https://d-vine.herokuapp.com/restaurants.json';
  //
  //     var getRestaurants = function () {
  //       console.log("getRestaurants started");
  //       console.log(url);
  //       return $http.get(url);
  //     };
  //
  //   });
  // }) ();


  (function () {
  "use strict";
  angular.module('dvine')
    .factory('RestaurantService', function ($http, $rootScope, $routeParams) {
      var restaurants = [
        {
        }
      ];

      var getRestaurants = function () {
        // return restaurants;
        return $http.get('https://d-vine.herokuapp.com/restaurants.json');
      };
      // var addRestaurant = function (restaurant) {
      //   restaurants.push(restaurant);
      // };

        var addRestaurant = function(restaurant) {
          return $http.post('https://d-vine.herokuapp.com/restaurants.jston');
        };

      var deleteRestaurant = function (index) {
        // var idx = restaurants.indexOf(restaurant);
        restaurants.splice(index, 1);
        console.log(restaurants);
      };

      var getSingleRestaurant = function (index) {
        return restaurants[index];
      };

      var editRestaurant = function (restaurant, index) {
        restuarants[index] = restaurant;
      }

      return {
        getRestaurants: getRestaurants,
        addRestaurant: addRestaurant,
        deleteRestaurant: deleteRestaurant,
        getRestaurant: getSingleRestaurant,
        editRestaurant: editRestaurant
      };
    });

})();
