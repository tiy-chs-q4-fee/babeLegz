angular.module("tbdModules", ["tbdModules.controllers","tbdModules.services", "ngRoute"])
  .config(function($routeProvider){
    $routeProvider
      .when("/",
      {
        templateUrl: "views/home.html",
        controller: "homeController"
      })
      .when("/notFound",
      {
        templateUrl: "views/notFound.html",
        controller: "homeController"
      })
      .when("/timeline",
      {
        templateUrl: "views/timeline.html",
        controller: "timeController"
      })
      .when("/budget",{
        templateUrl: "views/budget.html",
        controller: "budgetController"
      })
      .when("/gifts",{
        templateUrl: "views/gifts.html",
        controller: "giftController"
      })
      .when("/rsvp",{
        templateUrl: "views/rsvp.html",
        controller: "rsvpController"
      })
      .otherwise({
        redirectTo: "/notFound"
      })

  });

  angular.module("tbdModules.controllers", []);
  angular.module("tbdModules.services", []);
