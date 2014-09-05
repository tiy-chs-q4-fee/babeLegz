angular.module("tbdModules.services")
  .factory("dateService", function(){
    var myDate = [];

    var getDate = function() {
      return myWeddingDay;
    };

    var createDate = function(newMyDate){
      myWeddingDay = new Date(newMyDate);
    };

    var monthCount = function(myDate){
      console.log(myDate);
      var numMonths;
      var currentDate = new Date();
      console.log(currentDate);

      numMonths = currentDate - myDate;
      // var year = Number(moment(myDate).utc().format('YYYY'));
      // var month= Number(moment(myDate).utc().format('MM'));
      // var nowYear = Number(moment().utc().format('YYYY'));
      // var nowMonth= Number(moment().utc().format('MM'));
      // var diffYear = year - nowYear;
      //   if(diffYear >= 1 && month > nowMonth){
      //         var numMonths = (month - nowMonth) + 12*diffYear;
      //   }else if(diffYear >= 1 && month < nowMonth){
      //         var numMonths= 12*diffYear - (nowMonth - month);
      //   }else if(diffYear === 1){
      //         var numMonths = 12;
      //   }else if(diffYear < 1 && month > nowMonth){
      //         var numMonths = month - nowMonth;
      //   }else if(diffYear < 1 && month < nowMonth){
      //         var numMonths= nowMonth - month;
      //   }
      // return numMonths;
      console.log(numMonths)
    };

    var gifts = [];


    var getGifts = function() {
      return gifts;
    };

    var addGift = function (newGift) {
      gifts.push(newGift);
      console.log(gifts);
    };

    var rsvp = [
    {text:'Mark Twain', done:true},
    {text: 'Sara Elizabeth', done:false},
    {text: 'Sara Elizabeth', done:false},
    {text: 'Sara Elizabeth', done:false},
    {text: 'Sara Elizabeth', done:false},
    {text: 'Sara Elizabeth', done:false}
    ];

    var getRSVP = function (){
      return rsvp;
    };

    function rsvpCtrl($scope) {
    $scope.rsvp = [];
    };


    var guest = [];

    var addGuest = function (newGuest) {
    guest.push(newGuest);
    console.log(newGuest);
  };


    // return methods
    return{
      getDate: getDate,
      createDate: createDate,
      monthCount: monthCount,
      getGifts: getGifts,
      addGift: addGift,
      getRSVP: getRSVP,
      rsvpCtrl : rsvpCtrl,
      addGuest : addGuest
    };





  });
