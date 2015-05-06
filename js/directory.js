angular.module('directoryApp', [])
	.controller('directoryController', function($scope){
		$scope.list = [
			{name: 'Camilo', age: 27},
			{name: 'Pamela', age: 24},
			{name: 'Chris', age: 26},
			{name: 'Caremono', age: 30}
		];

		$scope.addPerson = function() {
			$scope.list.push({name:$scope.name, age:$scope.age});
			$scope.name = '';
			$scope.age = 0;
		};
	});