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