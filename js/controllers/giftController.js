angular.module("tbdModules.controllers")
  .controller("giftController", function($scope, $location, dateService){
    $scope.gifts = dateService.getGifts();
    $scope.createGift = function(gift){
      dateService.addGift(gift);
      $scope.newGift = {};
    };
    $scope.goToTimeline = function () {
    $location.path("/timeline");
    };
  });
