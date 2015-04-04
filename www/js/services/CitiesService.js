'use strict';

angular.module('starter.services', ['ngResource'])
.factory('Cities', function() {
	var cities = [
		{ id: 0, name: 'Miami', lat:25.7877 , lgn: 80.2241 },
    	{ id: 1, name: 'New York City' ,lat: 40.7127 , lgn: 74.0059 },
    	{ id: 2, name: 'London' ,lat:51.5072 , lgn: 1.1275 },
    	{ id: 3, name: 'Los Angeles' ,lat: 34.0500 , lgn: 118.2500 },
    	{ id: 4, name: 'Dallas' ,lat: 32.7758 , lgn:96.7967  },
   		{ id: 5, name: 'Frankfurt' ,lat:50.1117 , lgn: 8.6858 },
    	{ id: 6, name: 'New Delhi' ,lat:28.6100 , lgn: 77.2300 }
	];

	return {
		all: function() {
			return cities;
		},
		get: function(cityId) {
			return cities[cityId];
		}
	}
});