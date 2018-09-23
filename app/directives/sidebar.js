app.directive('sidebar', () => {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'app/views/sidebar.html'
	}
});