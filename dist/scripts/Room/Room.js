(function() {
	function Room($firebaseArray) {
		var roomsRef = new Firebase('https://bloc-chat-73327.firebaseio.com/');
		var rooms = $firebaseArray(roomsRef);

		return {
			all: rooms,

			add: function(room) {
				room.createdAt = Firebase.ServerValue.TIMESTAMP;
				rooms.$add(room);
			}

		};
	}

angular
	.module('blocchat')
	.factory('Room', ['$firebaseArray', Room]);
})();
