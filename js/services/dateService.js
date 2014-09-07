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

   
    var gifts = [];


    var getGifts = function() {
      return gifts;
    };

    var addGift = function (newGift) {
      gifts.push(newGift);
      console.log(gifts);
    };

    var rsvp = [
    {text: 'Mark Twain', done:false, date: new Date()},
    {text: 'Sara Elizabeth', done:false},
    {text: 'John Henry', done:false}
    ];

    var getRSVP = function (){
      return rsvp;
    };

    function rsvpCtrl($scope) {
    $scope.rsvp = [];
    };


    var guest = [];
   

    var getTotalTodos = function () {
    return guest.length;
  };

     var getGuest = function() {
      return guest;
    };

  


    var addGuest = function (newGuest) {
    guest.push({name:newGuest.name, extraguest:newGuest.extraguest, length:newGuest.length, date: new Date()});
    guest.rsvpGuest='';
    console.log(newGuest);
    console.log(guest.length);
  };

  
  var deleteGuest = function (idx){
    guest.splice(idx, 1);

  };

 




    // return methods
    return{
      setWeddingDate : setWeddingDate,
      getDaysUntilWedding : getDaysUntilWedding,
      getGifts: getGifts,
      addGift: addGift,
      getRSVP: getRSVP,
      rsvpCtrl : rsvpCtrl,
      getGuest : getGuest,
      addGuest : addGuest,
      getTotalTodos : getTotalTodos
      
    };





  });
