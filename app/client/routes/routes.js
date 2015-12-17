'use strict';
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
function (
    $stateProvider,
    $urlRouterProvider,
    $locationProvider)
    {
        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "../js/templates/home.html"
        });

        $urlRouterProvider.otherwise('/home');
        //$locationProvider.html5Mode(true);
    }]);
