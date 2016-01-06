function templatesProvider() {
	/**
	* Properties 
	*/
	var path = 'client/templates/{{0}}/{{1}}.html',
		pathLayouts = path.replace('{{0}}', 'layouts'),
		pathComponents = path.replace('{{0}}', 'common'),
		pathPages = path.replace('{{0}}', 'pages'),
		pathProductPages = path.replace('{{0}}', 'pages/products'),
		pathUserPages = path.replace('{{0}}', 'pages/users');
	var layouts = {
		onlyBody: { templateUrl: pathLayouts.replace('{{1}}', 'onlyBody') },
		oneColumn: { templateUrl: pathLayouts.replace('{{1}}', 'oneColumn') },
		twoColumns: { templateUrl: pathLayouts.replace('{{1}}', 'twoColumns') }
	};
	var components = {
		header: { templateUrl: pathComponents.replace('{{1}}', 'header') },
		footer: { templateUrl: pathComponents.replace('{{1}}', 'footer') }
	};
	var pages = {
		search: {
			url: "/search",
			views: {
				header: components.header,
				body: { templateUrl: pathProductPages.replace('{{1}}', 'search') }
			}
		},
		user: {
			create: {
				url: "/user/create",
				views: {
					header: components.header,
					body: { templateUrl: pathUserPages.replace('{{1}}', 'create') }
				}
			},
			edit: {
				url: "/user/edit/:id",
				views: {
					header: components.header,
					body: { templateUrl: pathUserPages.replace('{{1}}', 'edit') }
				}
			},
			list: {
				url: "/user/list",
				views: {
					header: components.header,
					body: { templateUrl: pathUserPages.replace('{{1}}', 'list') }
				}
			},
			detail: {
				url: "/user/detail",
				views: {
					header: components.header,
					body: { templateUrl: pathUserPages.replace('{{1}}', 'detail') }
				}
			}
		},
		home: {
			url: "/home",
			views: {
				body: { templateUrl: pathPages.replace('{{1}}', 'home') }
			}
		}
	};
	
	/**
	* Public method. 
	*/
	var services = {
		$get: {
			getHome: getHome,
			getUser: getUser,
			getSearch: getSearch
		}
	};
	return services;
	
	/**
	* Private method.
	*/
	function getHome() {
		return {
			getLayout: layouts.onlyBody,
			getPage: pages.home
		};
	};

	function getUser() {
		return {
			getLayout: layouts.oneColumn,
			getDetail: pages.user.detail,
			getEdit: pages.user.edit,
			getList: pages.user.list,
			getCreate: pages.user.create
		};
	};

	function getSearch() {
		return {
			getLayout: layouts.oneColumn,
			getPage: pages.search
		};
	};
}

angular.module('app.providers')
	   .provider('templates', templatesProvider);
