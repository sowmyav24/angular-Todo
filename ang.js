var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Item 1', done:false}];
    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var tempList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(tempList, function(item) {
            if (!item.done){
             $scope.todoList.push(item);
         }
        });
    };

    $scope.edit = function() {
        var tempList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(tempList, function(item) {
            if (!item.done) {
                $scope.todoList.push(item);
            }
            else {
                item.todoText=$scope.todoEdit;
                item.done=false;
                $scope.todoEdit="";
                $scope.todoList.push(item);
            }
        });
    };
});