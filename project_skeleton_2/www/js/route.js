app
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("main", {
				url: "/main",
				templateUrl: "templates/main.html",
				controller: "MainCtrl"
			})

			.state("page_1", {
				url: "/page-1",
				templateUrl: "templates/page-1.html",
				controller: "PageOneCtrl"
			})

			.state("page_2", {
				url: "/page-2",
				templateUrl: "templates/page-2.html",
				controller: "PageTwoCtrl"
			})

			.state("page_3", {
				url: "/page-3",
				templateUrl: "templates/page-3.html",
				controller: "PageThreeCtrl"
			})

			.state("page_4", {
				url: "/page-4",
				templateUrl: "templates/page-4.html",
				controller: "PageFourCtrl"
			})

		$urlRouterProvider.otherwise("/main");
	})