angular.module("tbdModules.controllers")
  .controller("homeController", function($scope, $location, dateService, timelineService){
    $scope.notFound = "404";
    $scope.setWeddingDate = function(weddingDate){
      timelineService.setWeddingDate(weddingDate)
      $location.path("/timeline")
    }
  });
