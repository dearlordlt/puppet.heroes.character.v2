var puppetHero = angular.module('puppetHero', ['ngRoute']);

//routes
angular.module('puppetHero').config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'homeController'
        })

        // route for the about page
        .when('/combat', {
            templateUrl : 'partials/combat.html',
            controller  : 'combatController'
        })

        // route for the contact page
        .when('/noncombat', {
            templateUrl : 'partials/noncombat.html',
            controller  : 'noncombatController'
        });
});

angular.module('puppetHero').factory("User",function(){
        return {};
});
