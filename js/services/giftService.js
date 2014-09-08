angular.module("tbdModules.services")
  .factory("giftService", function(){




var gifts = [];


    var getGifts = function() {
      return gifts;
    };

    var addGift = function (newGift) {
      gifts.push(newGift);
      console.log(gifts);
    };




// return methods
    return{
      getGifts: getGifts,
      addGift: addGift,
      
      
    };












  });