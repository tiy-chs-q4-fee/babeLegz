angular.module("tbdModules.controllers")
  .controller("timeController", function($scope, $location, dateService){
    $scope.grabDate = dateService.getDaysUntilWedding();
    // $scope.grabMonth = dateService.monthCount($scope.grabDate.toString());
    $scope.createGift = function(gift){
      dateService.addGift(gift);
      $scope.newGift = {};
    };
    
    $scope.goToGifts = function () {
    $location.path("/gifts");
    };
    $scope.goToRSVP = function () {
    $location.path("/rsvp");
    };
  });
