angular.module("tbdModules.services")
  .factory("budgetService", function(){
      var budget;

      var getBudget = function(budget){
        return budget;
      };
      var addBudget = function (amount) {
        budget = amount;
        console.log (budget);

      };




    return{
      getBudget : getBudget,
      addBudget : addBudget
    }




  });
