'use strict';

var forecastioWeather = ['$q', '$resource', '$http', 'FORECASTIO_KEY',
	function ($q, $resource, $http, FORECASTIO_KEY) {
		var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

		var weatherResource = $resource(url, {
			callback: 'JSON_CALLBACK',
		}, {
			get: {
				method: 'JSONP'
			}
		});

		return {
			getCurrentWeather: function(lat, lng) {
				return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');	
			}
		}
	}
];

angular.module('starter.services')
.factory('Weather', forecastioWeather);