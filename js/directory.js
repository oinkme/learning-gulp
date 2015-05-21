angular.module('directoryApp', [])
	.controller('directoryController', function(){
		
		var dirList = this;

		dirList.list = [
			{name: 'Camilo', age: 27},
			{name: 'Pamela', age: 24},
			{name: 'Chris', age: 26},
			{name: 'Caremono', age: 30}
		];

		dirList.addPerson = function() {
			dirList.list.push({name:dirList.name, age:dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};
	});