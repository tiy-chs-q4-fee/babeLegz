angular.module("tbdModules.controllers").controller("giftController",function(t,e,i){t.gifts=i.getGifts(),t.createGift=function(e){i.addGift(e),t.newGift={}},t.goToTimeline=function(){e.path("/timeline")}});