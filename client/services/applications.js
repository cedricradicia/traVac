function applicationsService() {
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

	function findByType(type) {
		var servicesByType = _.where(allServices, {type: type});
		return servicesByType;
	};
}

angular.module('app.services')
	   .factory('application', applicationsService);
