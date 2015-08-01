angular.module("reddit").controller("PostsController", function($scope, FirebaseService){

	function getPosts(){
		FirebaseService.getPosts().then(function(response){
			$scope.posts = response;
		})
	}

	$scope.addPost = function(){
		FirebaseService.addPost($scope.newPost).then(function(){
			getPosts();
		})
	}

	getPosts();
})