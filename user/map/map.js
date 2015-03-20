'use strict';

 angular.module('dvine')
.controller('MainCtrl', function($scope) {

  $scope.map = {
    center: {
      latitude: 45,
      longitude: -73
    },
    zoom:8
  }

  $scope.marker = {
    coords: {
      latitude: 45.12,
      longitude: -73
    },
  }

  $scope.markerList = [
    {
      latitude: 45.12,
      longitude: -74,
      //added with <window> tag on main.html
      message:'marker 1'
    },
    {
      latitude: 46.12,
      longitude: -75,
      message:'marker 2'
    },
    {
      latitude: 47.12,
      longitude: -76,
      message: 'marker 3'
    },
    {
      latitude: 48.12,
      longitude: -77,
      message: 'marker 4'
    },
    {
      latitude: 49.12,
      longitude: -78,
      message: 'marker 5'
    },
    {
      latitude: 50.12,
      longitude: -79,
      message: 'marker 6'
    },
  ]



});
