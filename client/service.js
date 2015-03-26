
  (function () {
  "use strict";
  angular.module('dvine')
    .factory('RestaurantService', function ($http, $rootScope, $routeParams) {
      var restaurants = [
        {
        }
      ];

      var url = "http://localhost:9000/restaurants";

      var getRestaurants = function () {
        // return restaurants;
        return $http.get(url + ".json");
      };

        var addRestaurant = function(restaurant) {
          $http.post(url + ".json", restaurant).success(function(data) {
            console.log("adding restaurant is successful", data);
          });
        };

      var deleteRestaurant = function (id) {
        $http.delete(url + "/" + id + '.json');
        // var idx = restaurants.indexOf(restaurant);
        // restaurants.splice(index, 1);
        // console.log(restaurants);
      };

      var getSingleRestaurant = function (index) {
        return restaurants[index];
      };

      var editRestaurant = function (restaurant) {
        $http.put(url + "/" + restaurant.id, restaurant )
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
