function listCtrl($scope, application) {
	var test = application.findByType('Service');
	$scope.testScope = "un simple test";
}

angular.module('app.controllers')
	   .controller('listCtrl', listCtrl);
