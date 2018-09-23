app.controller('detailsController', ['$scope', '$routeParams', 'peopleService', function($scope, $routeParams, people) {
	people.then((response) => {
		console.log(response.data.People[$routeParams.id]);
		$scope.person = response.data.People[$routeParams.id];
		$scope.likes = $scope.person.Likes;
		$scope.dislikes = $scope.person.Dislikes;
		$scope.rows = (() => {
			const rowArray = [];
            const maxSize = ($scope.likes.length > $scope.dislikes.length) ? $scope.likes.length : $scope.dislikes.length;
            for(let i = 0; i < maxSize; i++) {
                const like = ($scope.likes[i] === undefined) ? '' : $scope.likes[i];
                const dislike = ($scope.dislikes[i] === undefined) ? '' : $scope.dislikes[i];
                rowArray.push({like: like, dislike: dislike});
            }
			return rowArray;
		})();

		$scope.hearts = $scope.person.rating;
		$(document).ready(() => {
			for(let i = 0; i < 5; i++) {
                const $heart = $('<span>');
				if(i + 1 <= $scope.hearts) {
					$heart.addClass('glyphicon glyphicon-heart')
				}
				else {
					$heart.addClass('glyphicon glyphicon-heart-empty')
				}
				$('#hearts').append($heart)
			}
		})
	})
}]);