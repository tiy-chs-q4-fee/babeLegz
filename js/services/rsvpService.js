angular.module("tbdModules.services")
  .factory("rsvpService", function(){

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
   


     var getGuest = function() {
      return guest;
    };

  


    var addGuest = function (newGuest) {
    guest.push({name:newGuest.name, extraguest:newGuest.extraguest, length:newGuest.length, date: new Date()});
    guest.rsvpGuest='';
    console.log(newGuest);
    console.log(guest.length);
  };

  
  
	 var deleteGuest= function(newGuest){
	  	
	  };


// return methods
    return{
      getRSVP: getRSVP,
      rsvpCtrl : rsvpCtrl,
      getGuest : getGuest,
      addGuest : addGuest,
      deleteGuest: deleteGuest
  
      
      
    };


  });