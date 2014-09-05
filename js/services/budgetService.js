angular.module("tbdModules.services")
  .factory("budgetService", function(){
      var budget;

      var getBudget = function(budget){
        return budget;
      };
      var addBudget = function (newBudget) {
        budget = newBudget;

      };




    return{
      getBudget : getBudget
    }




  });
