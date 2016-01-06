function UserListController($scope, userService) {
	$scope.list = userService.findAll();
	$scope.remove = function(user) {
		userService.remove(user);
		$scope.list = userService.findAll();
	};
}

angular.module('app.controllers')
	   .controller('UserListController', UserListController);
