// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('MyCtrl', function($scope) {
  
  $scope.data = {
    showDelete: false,
    showReorder: false
  };
  
  $scope.deleteItem = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.guageColor = function(item){
    if (item.crimeIndex <= 3){
      return "balanced";
    }
    else if (item.crimeIndex > 3 && item.crimeIndex <= 7){
      return "energized";
    }
    else{
      return "assertive";
    }
  }
  
  $scope.items = [
    { id: 0, name: "Bicycle", crimeIndex: 2 },
    { id: 1, name: "Auto", crimeIndex: 0 },
    { id: 2, name: "Drugs", crimeIndex: 4 },
    { id: 3, name: "Disturbance", crimeIndex: 8 },
    { id: 4, name: "Assault", crimeIndex: 2 },
    { id: 5, name: "Animal", crimeIndex: 3 },
    { id: 6, name: "Burglary", crimeIndex: 6 }
  ];
  
});