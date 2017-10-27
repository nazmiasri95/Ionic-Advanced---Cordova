app
	.controller("MainCtrl", function ($scope, $localStorage) {
		
		console.log("This is MainController");

		// Initially, name is not saved
		$scope.saved = false;

		// Check whether local storage have value or not
		if ($localStorage.name) {
			console.log($localStorage.name)
		}

		$scope.save_name = function(name) {
			// Debug: print name value
			console.log(name);

			// Set as saved, and save in local storage
			$scope.saved = true;
			$localStorage.name = name;
		}

	})
	
	.controller("PageOneCtrl", function ($scope, $localStorage) {
		console.log("This is Page 1 Controller");
		
		// Check whether local storage have value or not
		if ($localStorage.name) {
			console.log($localStorage.name)
			
			$scope.fname = $localStorage.name.fname;
			$scope.lname = $localStorage.name.lname;
		}
	})
	
	.controller("PageTwoCtrl", function ($scope, $localStorage) {
		console.log("This is Page 2 Controller");
	})
	
	.controller("PageThreeCtrl", function ($scope, $localStorage) {
		console.log("This is Page 3 Controller");
	})
	
	.controller("PageFourCtrl", function ($scope, $localStorage) {
		console.log("This is Page 4 Controller");
	})