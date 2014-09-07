angular.module("tbdModules.controllers")
  .controller("giftController", function($scope, $location, giftService){
    $scope.gifts = giftService.getGifts();
    $scope.createGift = function(gift){
      giftService.addGift(gift);
      $scope.newGift = {};
    };

    

    $scope.goToTimeline = function () {
    $location.path("/timeline");
    };
  });
