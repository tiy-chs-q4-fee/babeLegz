angular.module("tbdModules.controllers")
  .controller("giftController", function($scope, $location, giftService, timelineService){
    $scope.gifts = giftService.getGifts();
    $scope.createGift = function(gift){
      giftService.addGift(gift);
      $scope.newGift = {};
    };

    $scope.setWeddingDate = function(weddingDate){
+      timelineService.setWeddingDate(weddingDate)
       $location.path("/timeline")
     }
    

    $scope.goToTimeline = function () {
    $location.path("/timeline");
    };
  });
