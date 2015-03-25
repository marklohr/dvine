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





//   // 'use strict';
//   /*global google:false */
//   var component = angular.module('mapComponent', []);
//
//   component.directive('map', function () {
//     'use strict';
//     var directionsDisplay = new google.maps.DirectionsRenderer(),
//         directionsService = new google.maps.DirectionsService(),
//         geocoder = new google.maps.Geocoder(),
//         map,
//         marker,
//         mapObj,
//         infowindow;
//
//     mapObj = {
//       restrict: 'EAC',
//       scope: {
//           destination: '@',
//           markerContent: '@',
//           zoom: '=',
//           type: '@',
//           directions: '@'
//       },
//       replace: true,
//       templateUrl: 'map.html',
//       link: function (scope, element) {
//           scope.init = function () {
//               var mapOptions = {
//                   zoom: scope.zoom !== undefined ? scope.zoom : 15,
//                   mapTypeId: scope.type !== undefined ? scope.type.toLowerCase() : 'roadmap',
//                   streetViewControl: false
//               };
//               map = new google.maps.Map(document.getElementById('theMap'), mapOptions); // todo: use angular-element :)
//               scope.endPoint = scope.destination !== undefined ? scope.destination : '1600 Amphitheatre Parkway, Santa Clara County, CA';
//
//               geocoder.geocode({
//                   address: scope.endPoint
//               }, function (results, status) {
//                   var location = results[0].geometry.location;
//                   if (status === google.maps.GeocoderStatus.OK) {
//                       map.setCenter(location);
//                       marker = new google.maps.Marker({
//                           map: map,
//                           position: location,
//                           animation: google.maps.Animation.DROP
//                       });
//                       infowindow = new google.maps.InfoWindow({content: scope.markerContent !== undefined ? scope.markerContent : 'Google HQ'});
//                       google.maps.event.addListener(marker, 'click', function () {
//                           return infowindow.open(map, marker);
//                       });
//
//                   } else {
//                       alert('Cannot Geocode');
//               }
//         });
//
//
//           };
//
//           scope.init();
//
//           scope.getDirections = function () {
//               var request = {
//                   origin: scope.origin,
//                   destination: scope.endPoint,
//                   travelMode: google.maps.DirectionsTravelMode.DRIVING
//               };
//               directionsService.route(request, function (response, status) {
//                   return status === google.maps.DirectionsStatus.OK ? directionsDisplay.setDirections(response) : console.warn(status);
//               });
//               directionsDisplay.setMap(map);
//
//               directionsDisplay.setPanel(document.getElementById('directionsList')); // again need to use angular element thats ugly otherwise.
//           };
//
//             scope.clearDirections = function () {
//               scope.init();
//               directionsDisplay.setPanel(null);
//               scope.origin = '';
//           };
//
//
//
//           }
//       };
//
//       return mapObj;
//
//
//
//   });
