angular.module("tbdModules.controllers")
  .controller("budgetController", function($scope, $location, budgetService){
    $scope.budget = budgetService.getBudget();
    $scope.createBudget = function(b){
      budgetService.addBudget(b);
      $scope.budget = budgetService.getBudget();
      $scope.newBudget = {};
    };


  });
