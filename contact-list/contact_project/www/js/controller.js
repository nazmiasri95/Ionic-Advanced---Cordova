// cordova platform add android
// cordova plugin add cordova-plugin-contacts
// cordova plugin add cordova-plugin-whitelist
// Check index.html as we need to add meta tag

app
	.controller("MainCtrl", function ($scope, $localStorage, $cordovaContacts) {
		console.log("This is MainController");

		$scope.getAllContacts = function() {
		    $cordovaContacts.find({filter : '', fields:  ['']}).then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
		        $scope.contacts = allContacts;
		        console.log(JSON.stringify(allContacts));
		    });
		};

	})
	
	.controller("PageOneCtrl", function ($scope, $localStorage) {
		console.log("This is Page 1 Controller");
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