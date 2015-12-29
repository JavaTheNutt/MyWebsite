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

app.controller('AboutCtrl', ['$scope', function ($scope) {
	$scope.name = 'About';
}]);

app.controller('HomeCtrl', ['$scope', function ($scope) {
	$scope.name = 'home';
}]);

app.controller('IndexCtrl', ['$scope', function ($scope) {
	
}]);

app.directive('jumbotronDirective', function () {
	return{
		restrict: 'E',
		templateUrl: 'partials/templates/jumbotron.html',
		controller: 'JumbotronCtrl',
		scope:{}
	}
});
app.controller('JumbotronCtrl', ['$scope', function ($scope) {
	$scope.data = {
		header : 'Joe Wemyss',
		subtitle: 'my site',
		linkAddress: 'https://github.com/javathenutt',
		linkName: 'Github'
	}
}]);

app.directive('projectPanel', function () {
	return{
		restrict : 'E',
		templateUrl: 'partials/views/projects/projects_panel.html',
		controller: 'ProjPanelCtrl',
		scope: {
			name: '@',
			state: '@',
			description: '@'
		}
	}
});
app.controller('ProjPanelCtrl', ['$scope', function ($scope) {

}]);

app.directive('navDirective', function () {
	return{
		restrict: 'E',
		templateUrl: 'partials/templates/nav.html',
		controller: 'NavCtrl',
		scope: {}
	}
});
app.controller('NavCtrl', ['$scope', function ($scope) {
	$scope.items = [
		{
			name: 'Home',
			state: 'home'
		},
		{
			name: 'About',
			state: 'about'
		}
	]
	$scope.projects = [
		{
			name: '3D Modelling',
			state: '3d_projects'
		}
	]
}])