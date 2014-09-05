angular.module("tbdModules.controllers")
  .controller("timeController", function($scope, $location, dateService){
    $scope.grabDate = dateService.getDate();
    $scope.grabMonth = dateService.monthCount($scope.grabDate.toString());
    $scope.createGift = function(gift){
      dateService.addGift(gift);
      $scope.newGift = {};
    };
    $scope.goToGifts = function () {
    $location.path("/gifts");
    };
  });
