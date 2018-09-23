app.controller('sidebarController', ['$scope', 'peopleService', function($scope, people) {
	people
        .then((response) => {
            $scope.people = response.data.People;
        }, (err) => {
            // Handle error
        })
}]);