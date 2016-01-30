var routerApp = angular.module("Codefun",['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'template/home.html'
		})
	});

