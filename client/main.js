'use strict';
var app = angular.module('app', [
		'ngRoute',
		'ui.router'
	]);

angular.element().ready(function () {
	angular.bootstrap(document, ['app']);
});