'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  this.helloWorld = function() {
    console.log("Hello, this the data service's method!");
  };
  
  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
      .then(callback) 
  };
  
  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!")
    // other logic
  };
  
  this.saveTodos = function(todos) {
    console.log(todos.length + " todos has been saved!")
    // other logic...
  };
});