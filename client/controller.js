(function() {
  "use strict";
  angular.module('dvine')
    .controller('RestController', function (RestaurantService, $scope, $http, $routeParams, $location){
      var restCtrl = this;


      // restCtrl.restaurants = RestaurantService.getRestaurants();
      console.log(RestaurantService);
      RestaurantService.getRestaurants().success(function(data){
        restCtrl.restaurants = data;
      });

      //restCtrl.singleRestaurant = RestaurantService.getRestaurant($routeParams.restaurantIndex);
      // restCtrl.go = function (index) {
      //   $http.post("https://d-vine.herokuapp.com/restaurants.json" + index)
      // };

      restCtrl.getRestaurant = function (restaurant) {
        RestaurantService.getItem(restaurant);
      };

      restCtrl.getAllRestaurants = function(restaurants) {
        RestaurantService.getAllItems(restaurants);
      };
    })
})();
