// Don't forget that you need to install the plugin from cordova first
// cordova plugin add de.appplant.cordova.plugin.local-notification

app
	.controller("MainCtrl", function ($scope, $localStorage, $cordovaLocalNotification) {
		console.log("This is MainController");

		$scope.fire_noti = function () {
			console.log("Clicked !");

			var time = new Date();
			time.setSeconds(time.getSeconds() + 5); 

			$cordovaLocalNotification.add({
		        id: 10,
		        title: "Project Notification",
		        message: "Give birthday gift to your friends !",
		        date: time,
		        data: "1",
		        // icon: "img/noti.png"
		    });
		}
	})