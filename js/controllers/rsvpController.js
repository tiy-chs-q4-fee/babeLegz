angular.module("tbdModules.controllers")
.controller("rsvpController", function($scope, $location, dateService){
  $scope.rsvp = dateService.getRSVP();
  $scope.createRSVP = function(rsvp){
      dateService.addRSVP(rsvp);
      $scope.newRSVP = {};

    };

    $scope.createGuest = function(guest){
      dateService.addGuest(guest);
      $scope.newGuest = {};
      $scope.guest={};
      
    };


    $scope.guests = dateService.getGuest();
    $scope.newGuests = dateService.getTotalTodos();
   
    $scope.value2 = 'YES'


    $scope.goToTimeline = function () {
    $location.path("/timeline");
    };

    });
