// get the 50 messages from the data source and populate messageListEntry

angular.module('chatter')

.controller('MessageListCtrl', function($scope, $http) {
  this.messages = [];

  // retrieves the 50 messages
  this.getMessages = () => {
    $http({
      method : 'GET',
      url : 'http://chattercube.thirdtape.com/messages'
    }).then(function successCallback(data) {
      this.messages = data;
      console.log(this.messages);
      console.log(this.messages.data.messages[0].message);
      console.log(this.messages.data.messages[0].username);
      console.log(this.messages.data.messages[0].createdAt);
    }, function errorCallback(data) {
      alert("Error");
    });
  }
})

.component('messageList', {
	controller: 'MessageListCtrl',
  templateUrl: 'src/templates/messageList.html'
});