angular.module("tbdModules.controllers")
  .controller("homeController", function($scope, $location, dateService){
    $scope.notFound = "404";
    $scope.addDate = function(myDate){
      dateService.createDate(myDate)
      $location.path("/timeline")
    }
  });
