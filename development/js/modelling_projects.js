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