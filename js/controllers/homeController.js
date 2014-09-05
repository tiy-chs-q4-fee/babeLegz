angular.module("tbdModules.controllers")
  .controller("homeController", function($scope, $location, dateService){
    $scope.notFound = "404";
    $scope.setWeddingDate = function(weddingDate){
      dateService.setWeddingDate(weddingDate)
      $location.path("/timeline")
    }
  });
