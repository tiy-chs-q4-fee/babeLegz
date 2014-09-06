angular.module("tbdModules.controllers")
  .controller("budgetController", function($scope, $location, budgetService){
    $scope.budget = budgetService.getBudget();

    $scope.createBudget = function(b){
      budgetService.addBudget(b);
      $scope.budget = budgetService.getBudget();
      $scope.newBudget = {};
    };
    $scope.refactorBudget = function(c){
      budgetService.updateBudget(c);

    };
    $scope.addExp = function(d){
      budgetService.addingExpense(d);
      $scope.newExpense = {};

    }


  });
