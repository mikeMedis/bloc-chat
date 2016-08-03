(function() {
	function() Message($firebaseArray, $cookies) {
		var firebaseRef = new Firebase("https://bloc-chat-73327.firebaseio.com/messages");
		var messageRef = $firebaseArray(firebaseRef);

		return {
			send: function(newMessage, roomId) {
				var message = {
					username: $cookies.get('blocChatCurrentUser'),
					content: newMessage,
					sentAt: Firebase.ServerValue.TIMESTAMP,
					roomId: roomId
				}
				messageRef.$add(message);
			},

			findById: function(roomId) {
				return $firebaseArray(firebaseRef.orderByChild("roomId").equalTo(roomId));
			}
		};
	}

	angular
		.module('blocchat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
