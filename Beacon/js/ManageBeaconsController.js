module.controller('ManageBeaconCtrl', ['$scope', '$http', function ($scope, $http) {


var objects = [];
$scope.filter = "x in objects";


	var selectedId = "";
	
	$http.get("phpfiles/getBeacons.php")
                .success(function(data){
                    $scope.objects = data;
                    objects = $scope.objects;
					console.log(objects);
                })
                .error(function() {
                    $scope.data = "error in fetching data";
                });




$scope.deleteBeacon = function(id_beacon)
{
	if (confirm('Do you really want to delete beacon with id ' + id_beacon)) {

	$http.get("phpfiles/deleteBeacon.php?id_beacon=" + id_beacon)
	 .success(function(data){
                   // $scope.object = data[0];
                   //alert('Deleted');
					error("msg","Deleted");
                   location.reload(true);
                })
                .error(function() {
                    console.log("error");
                });
	}
}


var selectedId = "";

$scope.updateBeacon = function(id_beacon, name, author, year, description, image_url, showroom)
{
	    $scope.url = "phpfiles/updateBeacon.php";
    $http.post($scope.url, {"id_beacon" : id_beacon, 
                            "name" : name, 
                            "author" : author, 
                            "year" : year, 
                            "description" : description,
                            "image_url": image_url,
                            "showroom": showroom})
                .success(function(data, status){
                   //alert("Success");
				   error("msg","Success");
                   console.log(data);
                   console.log(id_beacon);
				   location.reload(true);
                })
                .error(function() {
                    $scope.data = "error in fetching data";
                });
}

}]);