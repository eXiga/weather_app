'use strict';

angular.module('starter.services')
.factory('DataStore', function() {
	var DataStore = {
		city: 'Miami',
		latitude: 25.7877,
		longitude: 80.2241
	};

	DataStore.setCity = function (value) {
		DataStore.city = value;
	};

	DataStore.setLatitude = function (value) {
		DataStore.latitude = value;
	};

	DataStore.setLongitude = function (value) {
		DataStore.longitude = value;
	};

	return DataStore;
});