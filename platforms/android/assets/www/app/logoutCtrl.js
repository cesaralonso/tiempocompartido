app.controller('logoutCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
	$scope.expr = variables;
	$scope.logout = function () {
		Data.get('logout').then(function (results) {
			Data.toast(results);
			$location.path('login');
		});
	}
});