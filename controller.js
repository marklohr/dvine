(function() {
  "use strict";

  angular.module('dvine')
  .controller('MainController', function ($location) {
    var mainCtrl = this;
    console.log('main control loaded');
    // mainCtrl.goToAdmin = function () {
    //   $location.path('/admin');
    // };
    // mainCtrl.gotToList = function (){
    //   $location.path('/list');
    // };
     mainCtrl.goToMap= function () {
       $location.path('/map');
     };
 });
})();
