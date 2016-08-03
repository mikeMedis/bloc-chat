(function() {
	function config($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider
		.html5Mode({
			enabled: true,
			requireBase: false
		});

		$stateProvider
		.state('home', {
			url: '/',
			controller: 'HomeCtrl as home',
			templateUrl: '/templates/home.html'
		}),

		.state('modal', {
			url: '/',
			controller: 'ModalCtrl as modal',
			templateUrl: '/template/modal.html'
		});
	}

angular
	.module('blocchat', ['ui.router', 'firebase', 'ui.bootstrap'])
	.config(config);
})();
