angular.module("tbdModules.controllers")
  .controller("giftController", function($scope, $location, dateService){
    $scope.createGift = function(gift){
      dateService.addGift(gift);
      newGift = '';
    }
  });
