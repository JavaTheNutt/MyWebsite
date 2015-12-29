var app = angular.module("myApp", [
	"ui.router",
	"ncy-angular-breadcrumb"
]);
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'partials/views/home.html',
			controller:'HomeCtrl',
			ncyBreadcrumb:{
				label:'Home'
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/views/about.html',
			controller: 'AboutCtrl',
			ncyBreadcrumb:{
				label: 'About',
				parent: 'home'
			}
		})
		.state('3d_projects', {
			url: '/3d_projects',
			templateUrl: 'partials/views/projects/modelling_projects.html',
			ncyBreadcrumb:{
				label:'3D Projects',
				parent: 'home'
			}
		})
		.state('3d_shape', {
			url: '/3d_shape',
			templateUrl: 'partials/views/projects/3d_shape.html',
			ncyBreadcrumb:{
				label: '3D Shape',
				parent: '3d_projects'
			}
		})
}]);