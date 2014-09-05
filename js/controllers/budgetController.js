angular.module("tbdModules.controllers")
  .controller("budgetController", function($scope, $location, budgetService){
    $scope.budget = budgetService.getBudget();
    $scope.createBudget = function(newBudget){
      budgetService.addBudget(newBudget);
      $scope.newBudget = {};
    };


  });
