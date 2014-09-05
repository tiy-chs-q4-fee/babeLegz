angular.module("tbdModules.services")
  .factory("dateService", function(){

    var daysUntilWedding;

    var getDaysUntilWedding = function() {

      return daysUntilWedding;
    };

    var setWeddingDate = function(weddingDate){
        var myWeddingDate = new Date(weddingDate);
        myWeddingDate = myWeddingDate.getTime();
        var currentDate = new Date();
        currentDate = currentDate.getTime();
        timeUntilWeddingDay = myWeddingDate - currentDate;
        daysUntilWedding = timeUntilWeddingDay/(1000*60*60*24);
        daysUntilWedding = Math.ceil(daysUntilWedding);
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
    {text: 'Mark Twain', done:true},
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
      setWeddingDate : setWeddingDate,
      getDaysUntilWedding : getDaysUntilWedding,
      getGifts: getGifts,
      addGift: addGift,
      getRSVP: getRSVP,
      rsvpCtrl : rsvpCtrl,
      addGuest : addGuest
    };





  });
