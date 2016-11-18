module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'views/Home.html'
                }).
                when('/AddBeaconData', {
                    templateUrl: 'views/AddBeaconData.html'
                }).
                when('/ManageBeaconData', {
                    templateUrl: 'views/ManageBeaconData.html'
                }).
                when('/EditBeaconData', {
                    templateUrl: 'views/EditBeaconData.html'
                }).
                when('/php', {
                    templateUrl: 'php/application/views/index.html'
                }).
                when('/phpfiles/getBeacons.php',
                {
                    templateUrl: 'phpfiles/getBeacons.php'
                })

        }]);

module.controller("RouteController", function($scope) {
    })

