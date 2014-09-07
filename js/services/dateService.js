angular.module("tbdModules.services")
  .factory("dateService", function(){

    var monthsUntilWedding;

    var getDaysUntilWedding = function() {

      return monthsUntilWedding;
    };

    var setWeddingDate = function(weddingDate){
        var myWeddingDate = new Date(weddingDate);
        myWeddingDate = myWeddingDate.getTime();
        var currentDate = new Date();
        currentDate = currentDate.getTime();
        timeUntilWeddingDay = myWeddingDate - currentDate;
        monthsUntilWedding = timeUntilWeddingDay/(1000*60*60*24*30);
        monthsUntilWedding = Math.floor(monthsUntilWedding);
    };

   
    return{
      setWeddingDate : setWeddingDate,
      getDaysUntilWedding : getDaysUntilWedding,
    };


  });
