(function (app) {
    var telsaController = function ($scope, $window) {
		
		$scope.title = "Telsa";	
		
		$scope.detailsObj = {
			"email" : '',
			"fName" : '',
			"lName" : '',
			"country" : 'country'
		}
		
		$scope.submitObj = [];
		
		
		$scope.submitDetails = function(){
			alert("Details submitted");
			
			$scope.submitObj.push($scope.detailsObj);
			console.log($scope.submitObj);
			
			$scope.detailsObj = {
				"email" : '',
				"fName" : '',
				"lName" : '',
				"country" : 'country'
			}
		}
		
    }
	app.controller("telsaController", ["$scope", "$window", telsaController]);
}(angular.module("telsaapp")));