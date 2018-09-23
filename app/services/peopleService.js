app.factory('peopleService', ['$http', ($http) => {
	return $http.get('./assets/data/people.json')
		.then((data) => {
			return data;
		}, (err) => {
            return err;
        })
}]);