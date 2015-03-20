(function (){
  "use strict";
  angular.module('usermain')
    .factory('RestaurantService' function(){

      var restaurants = [];

      var getRestaurants = funciton () {
        console.log('getting restaurants');
        return restaurants;
      };

      var addRestaurant = function (newRestaurant) {
        restaurants.push(newRestaurant);
        console.log(restaurants);
      };

      var removeRestaurant = function (restaurant) {
        var index = restaurant
      }
    })
})
