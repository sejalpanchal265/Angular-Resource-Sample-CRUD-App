var myApp = angular.module("myAngularApp",['ngResource']);
myApp.factory('User',function($resource){
	return $resource('http://jsonplaceholder.typicode.com/users:id',
		{id:'@id'});
});

myApp.controller('myCtrl',function(User){
	var vm = this;
	var users=[];
	var selectedUser = null;

	this.getUsers = function(){
		vm.users = User.query();
	};

	this.getUser = function(id){
		vm.selectedUser = User.get({id:id});
	};

	this.deleteUser = function(id){
		vm.selectedUser = User.delete({id:id});
	};

	this.addUser = function(name){
		var user = new User({name:name});
		user.$save(function(newUser){
			vm.selectedUser = newUser;
		});

	};
});

