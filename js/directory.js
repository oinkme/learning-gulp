angular.module('directoryApp', [])
	.controller('directoryController', function($scope){
		$scope.list = [
			{name: 'Camilo', age: 27},
			{name: 'Pamela', age: 24},
			{name: 'Chris', age: 26},
			{name: 'Caremono', age: 30}
		]
	});