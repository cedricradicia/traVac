'use strict';
angular.module('app').config([
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
            templateUrl: "../templates/home.html"
        });

        $urlRouterProvider.otherwise('/home');
        //$locationProvider.html5Mode(true);
    }]);
