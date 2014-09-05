angular.module("tbdModules.services")
  .factory("budgetService", function(){
      var budget={
        total:10000,
        left:7500,
        expense:[{
          item:"Wedding Dress",
          price:2000,
        },
        {
          item:"Tux",
          price:500,
        }]
      };

      var getBudget = function(){

        return budget;
      };
      var addBudget = function (amount) {
        budget = amount;

        console.log(budget);



      };




    return{
      getBudget : getBudget,
      addBudget : addBudget
    }




  });
