function UserEditController($scope, $state, userService) {
	if ($state.params.id !== undefined) {
		$scope.user = userService.findById($state.params.id);
	}
	$scope.update = function(user) {
		$scope.user = userService.saveOrUpdate(user);
		$state.go('user.list');
	};
}

angular.module('app.controllers')
	   .controller('UserEditController', UserEditController);
