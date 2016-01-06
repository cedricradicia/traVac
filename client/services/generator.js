function generatorService() {
	var types = [
		'Object',
		'Benefit'
	];
	var sample = {
		type: null,
		title: null
	};
	
	var sampleUser = {
		type: null,
		title: null
	};

	var services = {
		generateUser: generateUser,
		generate: generate,
		generateList: generateList
	};
	return services;
	
	/**
	* Private method.
	*/
	function generate(type) {
		return allServices;
	};

	function generateUser() {
		return null;
	};
	
	function generateList(iteration) {
		sample
		return allServices;
	};
}

angular.module('app.services')
	   .factory('generator', generatorService);
