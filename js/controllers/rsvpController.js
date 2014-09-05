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
    };


    $scope.guests = dateService.getGuest();

    $scope.goToTimeline = function () {
    $location.path("/timeline");
    };

    });
