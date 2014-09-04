angular.module("tbdModules.controllers")
  .controller("timeController", function($scope, $location, dateService){
    $scope.grabDate = dateService.getDate();
    $scope.grabMonth = dateService.monthCount($scope.grabDate.toString());
  })
