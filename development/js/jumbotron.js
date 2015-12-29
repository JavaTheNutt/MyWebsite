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