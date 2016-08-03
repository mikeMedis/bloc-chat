(function() {
	function HomeCtrl(Room, $uibModal) {
		var ctrl = this;
		ctrl.heroTitle = "Welcome to Phazer a Messaging Application";
		ctrl.rooms = Room.all;

		ctrl.setRoom = function(room) {
			ctrl.currentRoom = room;
		}

		ctrl.open = function() {

			var modalInstance = $uibModal.open({
				controller: 'ModalCtrl as modal',
				templateUrl: 'templates/modal.html'
			});
		};

	}

angular
	.module('blocchat')
	.controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);
})();
