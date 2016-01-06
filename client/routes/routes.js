'use strict';
angular.module('app').config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'templatesProvider',
function (
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    TemplatesProvider) {
        // views.home.views = {
        //     body: views.homeBody
        // };
        
        //  $stateProvider.state('home', TemplatesProvider.$get.getHome().getLayout);
        //  $stateProvider.state('home.main', TemplatesProvider.$get.getHome().getPage);
// 
//         $stateProvider.state('search', TemplatesProvider.$get.getSearch().getLayout);
//         $stateProvider.state('search.main', TemplatesProvider.$get.getSearch().getPage);

        $stateProvider.state('user', TemplatesProvider.$get.getUser().getLayout);
        $stateProvider.state('user.detail', TemplatesProvider.$get.getUser().getDetail);
        $stateProvider.state('user.create', TemplatesProvider.$get.getUser().getCreate);
        $stateProvider.state('user.edit', TemplatesProvider.$get.getUser().getEdit);
        $stateProvider.state('user.list', TemplatesProvider.$get.getUser().getList);

        $urlRouterProvider.otherwise('user.create');
//        $urlRouterProvider.otherwise('home.main');
        $locationProvider.html5Mode(true);
    }
]);
