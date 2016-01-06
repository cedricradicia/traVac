function benefitService() {
	/**
	* Public method. 
	*/
	var allServices = [
		{
			type: "Service",
			title: "Haircut"
		},
		{
			type: "Object",
			title: "Cars"
		}

	];

	var services = {
		create: create,
		findAll: findAll,
		findByType: findByType
	};
	return services;
	
	/**
	* Private method.
	*/
	function findAll() {
		return allServices;
	};

	function create(benefit) {
		// Create a new;
	};

	function findByType(type) {
		var servicesByType = _.where(allServices, {type: type});
		return servicesByType;
	};
}

angular.module('app.services')
	   .factory('benefit', benefitService);
