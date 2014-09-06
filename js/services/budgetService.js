angular.module("tbdModules.services")
  .factory("budgetService", function(){
      var budget={
        total:0,
        left:0,
        expense:[]
      };

      var getBudget = function(){

        return budget;
      };
      var addBudget = function (amount) {
        budget.total = amount;



      };
      var spent = 0;
      var addingExpense = function (expItem){
        budget.expense.push(expItem);
        spent += expItem.price;
        budget.left = budget.total - spent;
        budget.spent = spent;



      };


    return{
      getBudget : getBudget,
      addBudget : addBudget,
      addingExpense : addingExpense
    }




  });
