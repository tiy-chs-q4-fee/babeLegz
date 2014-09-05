angular.module("tbdModules.controllers")
  .controller("budgetController", function($scope, $location){
    $scope.budget = budgetService.getBudget();
    $scope.createBudget = function(budget){
      budgetService.addBudget(budget);
      $scope.newBudget = {};
    };


  });
