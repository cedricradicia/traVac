function userService() {
	var services = {
		saveOrUpdate: saveOrUpdate,
		remove: remove,
		findById: findById,
		findAll: findAll
	};
	return services;

	function saveOrUpdate(user) {
		if (user._id === undefined) {
			Users.insert(user);
		} else {
			Users.update({_id: user._id}, user);
		}
		console.debug("insert user");
	};

	function remove(user) {
		console.debug("remove user");
		return Users.remove(user._id);
	};

	function findById(id) {
		console.debug("find user");
		return Users.findOne(id);
	};

	function findAll() {
		console.debug("find all user");
		return Users.find().fetch();
	};
}

angular.module('app.services')
	   .factory('userService', userService);
