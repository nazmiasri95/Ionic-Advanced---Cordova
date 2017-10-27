app
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("main", {
				url: "/main",
				templateUrl: "templates/main.html",
				controller: "MainCtrl"
			})

		$urlRouterProvider.otherwise("/main");
	})