var puppetHero = angular.module('puppetHero', ['ngRoute']);

//routes
angular.module('puppetHero').config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'homeController'
        })

        // route for the combat page
        .when('/combat', {
            templateUrl : 'partials/combat.html',
            controller  : 'combatController'
        })

        // route for the non-combat page
        .when('/noncombat', {
            templateUrl : 'partials/noncombat.html',
            controller  : 'noncombatController'
        })

        // route for the talents page
        .when('/talents', {
            templateUrl : 'partials/talents.html',
            controller  : 'talentsController'
        });
});

angular.module('puppetHero').factory("User",function(){
        return {};
});
