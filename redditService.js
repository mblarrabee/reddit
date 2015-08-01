angular.module("reddit").service("FirebaseService", function($http, $q){

	var guid = function() {
    	var s4 = function() {
      		return Math.floor((1 + Math.random()) * 0x10000)
        		.toString(16)
        		.substring(1);
    	}
   		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      		s4() + '-' + s4() + s4() + s4();
  }

	this.getPosts = function(){

		return $http.get('https://devmtn.firebaseio.com/posts.json').then(function(response){
			return response.data;
		});
	}

	this.addPost = function(post){

		post.timestamp = Date.now();
		post.comments = [];
		post.karma = 0;
		post.id = guid();

		console.log(post)

		return $http.put('https://devmtn.firebaseio.com/posts/' + post.id + '.json', post);
	
	}
})