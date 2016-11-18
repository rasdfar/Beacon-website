module.controller('BeaconCtrl', ['$scope', '$http', function ($scope, $http) {

	$scope.id_beacon = "";
	$scope.name = "";
	$scope.author = "";
	$scope.year = "";
	$scope.description ="";
	$scope.image_url = "http://www.exampleurl.com";
	$scope.showroom = "A";


$scope.addNewBeacon = function(){

	$scope.url = "phpfiles/addNewBeacon.php";
	$http.post($scope.url, {"id_beacon" : $scope.id_beacon, 
							"name" : $scope.name, 
							"author" : $scope.author, 
							"year" : $scope.year, 
							"description" : $scope.description,
							"image_url": $scope.image_url,
							"showroom": $scope.showroom})
                .success(function(data, status){
                   //alert("Success");
                   console.log(data);
                   console.log(id_beacon);
					error("msg","Success");
					location.reload(true);
                })
                .error(function() {
                    $scope.data = "error in fetching data";
                });

}
}]);