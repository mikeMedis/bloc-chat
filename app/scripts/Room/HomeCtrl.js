(function() {
	function HomeCtrl(chatRoom) {
		var ctrl = this;
		ctrl.heroTitle = "Welcome!";
		ctrl.rooms = Room.all;

		ctrl.setRoom = function(room) {

			ctrl.currentRoom = room;
			ctrl.messages = Message.findById(room.$id);
		};

		crtl.sendMessage = function() {
			Message.send(ctrl.newMessage, ctrl.currentRoom.$id);
		};

		ctrl.open = function() {
			var modalInstance = $uibModal.open({
				controller: 'ModalCtrl as modal',
				templateUrl: 'templates/modal.html'
			});
		};

	}

	angular
		.module('blocchat')
		.controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
