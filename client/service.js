
  (function () {
  "use strict";
  angular.module('dvine')
    .factory('RestaurantService', function ($http, $rootScope, $routeParams) {
      var restaurants = [
        {
        }
      ];

      var url = "https://d-vine.herokuapp.com/restaurants.json";

      var getRestaurants = function () {
        // return restaurants;
        return $http.get('https://d-vine.herokuapp.com/restaurants.json');
      };
      // var addRestaurant = function (restaurant) {
      //   restaurants.push(restaurant);
      // };

        var addRestaurant = function(restaurant) {
          return $http.post('https://d-vine.herokuapp.com/restaurants.json');
        };

      var deleteRestaurant = function (id) {
        $http.delete("url" + id);
        // var idx = restaurants.indexOf(restaurant);
        // restaurants.splice(index, 1);
        // console.log(restaurants);
      };

      var getSingleRestaurant = function (index) {
        return restaurants[index];
      };

      var editRestaurant = function (restaurant) {
        $http.put("url" + restaurant.id, restaurant )
        // restuarants[index] = restaurant;
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
