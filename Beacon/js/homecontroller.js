module.controller( 'HomeCtrl', ['$scope', '$http', function($scope){        
    $scope.LoginButton = function(){
        window.location.href="#/NewUserForm"; 
    };   

    $scope.welcomeText = "Moi";     
}]);
