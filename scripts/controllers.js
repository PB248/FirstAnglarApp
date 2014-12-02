var app = angular.module('ControlRoom', [])

function MainWindow($scope) {
	$scope.thePage = "home";
	
	function setPage(screen) {
		$scope.thePage = screen;
	}
	$scope.setPage = setPage;
	
	function isPageCurrent(screen) {
		return ($scope.thePage == screen);
	}
	$scope.isPageCurrent = isPageCurrent;
}

app.directive("thedata", function() {
	return {
		restrict: "E",
		templateUrl: function(elem, attr){
      		return attr.newpage+'.html'} 
		};
});
