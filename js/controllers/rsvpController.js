angular.module("tbdModules.controllers")
.controller("rsvpController", function($scope, $location, dateService){
	$scope.rsvp = dateService.getRSVP();


	$scope.createRSVP = function(rsvp, guest){
      dateService.addRSVP(rsvp);
      $scope.newRSVP = {};
      dateService.addGuest(guest);
      $scope.newGuest = {};
    };

   


    $scope.goToTimeline = function () {
    $location.path("/timeline");
    };

	  });