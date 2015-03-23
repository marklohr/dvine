(function() {
  "use strict";
  angular.module('dvine')
    .controller('MainController', function (RestaurantService, $scope, $http, $routeParams, $location){
      var mainCtrl = this;


      // mainCtrl.restaurants = RestaurantService.getRestaurants();
      console.log(RestaurantService);
      RestaurantService.getRestaurants().success(function(data){
        mainCtrl.restaurants = data;
      });

      //mainCtrl.singleRestaurant = RestaurantService.getRestaurant($routeParams.restaurantIndex);
      // mainCtrl.go = function (index) {
      //   $http.post("https://d-vine.herokuapp.com/restaurants.json" + index)
      // };

      mainCtrl.getRestaurant = function (restaurant) {
        RestaurantService.getItem(restaurant);
      };

      mainCtrl.getAllRestaurants = function(restaurants) {
        RestaurantService.getAllItems(restaurants);
      };
    })
})();
