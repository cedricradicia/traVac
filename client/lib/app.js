'use strict';
angular.module('app', [
	'ngRoute',
	'ui.router'
]);

angular.element().ready(function () {
	angular.bootstrap(document, ['app']);
});