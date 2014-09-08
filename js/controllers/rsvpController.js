angular.module("tbdModules.controllers")
.controller("rsvpController", function($scope, $location, rsvpService){
  $scope.rsvp = rsvpService.getRSVP();
  $scope.createRSVP = function(rsvp){
      rsvpService.addRSVP(rsvp);
      $scope.newRSVP = {};

    };

    $scope.createGuest = function(guest){
      rsvpService.addGuest(guest);
      // rsvpService.deleteGuest(guest);
      $scope.newGuest = {};
      $scope.guest={};
      
    };


 



    $scope.guests = rsvpService.getGuest();
    
   
    $scope.value2 = 'YES'


    $scope.goToTimeline = function () {
    $location.path("/timeline");
    };

    });
