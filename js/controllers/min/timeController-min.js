angular.module("tbdModules.controllers").controller("timeController",function(t,o,n){t.grabDate=n.getDate(),t.grabMonth=n.monthCount(t.grabDate.toString()),t.goToGifts=function(){o.path("/gifts")}});