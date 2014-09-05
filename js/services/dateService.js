angular.module("tbdModules.services")
  .factory("dateService", function(){
    var date = [];

    var getDate = function() {
      return date[0];
    };
    var createDate = function(newDate){
      date.unshift(newDate);
    };

    var monthCount = function(date){
      console.log(date);
      var numMonths;
      var year = Number(moment(date).utc().format('YYYY'));
      var month= Number(moment(date).utc().format('MM'));
      var nowYear = Number(moment().utc().format('YYYY'));
      var nowMonth= Number(moment().utc().format('MM'));
      var diffYear = year - nowYear;
        if(diffYear >= 1 && month > nowMonth){
              var numMonths = (month - nowMonth) + 12*diffYear;
        }else if(diffYear >= 1 && month < nowMonth){
              var numMonths= 12*diffYear - (nowMonth - month);
        }else if(diffYear === 1){
              var numMonths = 12;
        }else if(diffYear < 1 && month > nowMonth){
              var numMonths = month - nowMonth;
        }else if(diffYear < 1 && month < nowMonth){
              var numMonths= nowMonth - month;
        }
      return numMonths;
    };

    var gifts = [];

    var addGift = function (newGift) {
      gifts.unshift(newGift);
      console.log(gifts);
    };

    // return methods
    return{
      getDate: getDate,
      createDate: createDate,
      monthCount: monthCount,
      addGift: addGift
    };
  });
