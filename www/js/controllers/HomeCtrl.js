angular.module('starter.controllers', ['ionic'])
.constant('FORECASTIO_KEY', '')
.controller('HomeCtrl', function($scope, $state, Weather, DataStore) {
	$scope.city = DataStore.city;
	var latitude = DataStore.latitude;
	var longitude = DataStore.longitude;

	Weather.getCurrentWeather(latitude, longitude).then(function(resp) {
		$scope.current = resp.data;
	}, function(error) {
		alert('Unable to get current conditions. Check internet connection');
	});
});