// get the 50 messages from the data source

angular.module('chatter')

.controller('MessageFeedCtrl', function($scope, $http) {
  this.messages = [];
  console.log("test");
  this.getMessages = function() {
		console.log("getMessages called");
		$http({
  		method : 'GET',
  		url : 'http://chattercube.thirdtape.com/messages'
    }).then(function successCallback(data) {
    	console.log("Success");
    	this.messages = data;
    }, function errorCallback(data) {
    	console.log("Error");
    });
  }
})

.component('messageFeed', {
	controller: 'MessageFeedCtrl',
  templateUrl: 'src/templates/messageFeed.html'
});


// Simple GET request example:
// $http({
//   method: 'GET',
//   url: '/someUrl'
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });