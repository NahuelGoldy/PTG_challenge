const app = angular.module('app', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            controller: 'appController',
            templateUrl: 'app/views/details.html'
        })
        .when('/person/:id', {
            controller: 'detailsController',
            templateUrl: 'app/views/details.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});