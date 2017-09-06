// displays the message and username for a message

angular.module('chatter')

.component('messageListEntry', {
	bindings: {
		messages: '<',
		message: '<',
	},
  templateUrl: 'src/templates/messageListEntry.html'
  });