angular.module("tbdModules.controllers")
  .controller("timeController", function($scope, $location, timelineService, dateService){
    
    $scope.grabDate = timelineService.getDaysUntilWedding();
    $scope.nineToSixteenMonths = timelineService.getNineToSixteenMonths();
    $scope.eightMonths = timelineService.getEightMonths();
    $scope.sixToSevenMonths = timelineService.getSixToSevenMonths();
    $scope.fourToFiveMonths = timelineService.getFourToFiveMonths();
    $scope.threeMonths = timelineService.getThreeMonths();
    $scope.twoMonths = timelineService.getTwoMonths();
    $scope.oneMonth = timelineService.getOneMonth();

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
