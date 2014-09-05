angular.module("tbdModules.controllers")
  .controller("homeController", function($scope, $location, dateService){
    $scope.notFound = "404";
    $scope.addDate = function(date){
      dateService.createDate(date)
      $location.path("/timeline")
    }
  });
