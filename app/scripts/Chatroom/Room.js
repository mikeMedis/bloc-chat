(function() {
	function Room($firebaseArray) {
		var Room = {};

		var roomRef = new Firebase('https://bloc-chat-73327.firebaseio.com/rooms');
		var rooms = $firebaseArray(roomRef);

		Rooms.all = rooms;

		Room.add function(room) {
			room.createdAt = Firebase.ServerValue.TIMESTAMP;
			rooms.$add(room);
		}
	};

angular
	.module('blocchat')
	.factory('Room', ['$firebaseArray', Room]);
})();
