angular.module('starter.controllers')
.controller('LocationsCtrl', function($scope, $state, Cities, DataStore) {
	$scope.cities = Cities.all();

	$scope.changeCity = function(cityId) {
		var lat = $scope.cities[cityId].lat;
		var lgn = $scope.cities[cityId].lgn;
		var city = $scope.cities[cityId].name;

		DataStore.setCity(city);
		DataStore.setLatitude(lat);
		DataStore.setLongitude(lgn);

		$state.go('tab.home');
	}
});
