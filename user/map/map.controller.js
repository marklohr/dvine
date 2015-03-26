(function () {
  "use strict";

  angular.module('usermain')
  .controller('MapController', function (RestaurantService, $routeParams, $location, $scope) {

    console.log('controller is working');

    var mapCtrl = this;
    $scope.map = {
      center: {
        latitude: 32.8433,
        longitude: -79.9333

        },
        zoom: 12
      };

      mapCtrl.points =[
         {
          coords: {
            latitude: 32.8433,
            longitude: -79.9333
          }
        },
         {
          coords: {
            latitude: 32.8533,
            longtitude: -79.9342
          }
        }
      ];

      // RestaurantService.getSingleRestaurant($routeParams.restaurant).success(function (data) {
      //   restCtrl.singleRestaurant = data;
      //
      // });
      // RestaurantService.getRestaurants().success(function (data) {
      //   restCtrl.restaurants = data;
      //   console.log(data);
      // })

      // for(var i = 0; i < data.length; i++) {
      //    RestaurantService.getCoords(data [i]);
      //   console.log('looping' + i);
      // }

    // mapCtrl.currentIndex = $routeParams.restaurantId;

    mapCtrl.goToRestaurants = function() {
      $location.path('/list');
      $('head').find('style').remove();
    }

    console.log($scope.map);

    mapCtrl.goToMap = function () {
      $location.path('/map');
    }
  })
})();
