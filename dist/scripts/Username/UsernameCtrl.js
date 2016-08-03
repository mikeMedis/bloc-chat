(function() {
	function UsernameCtrl($uibModalInstance, $scope) {
		$scope.newUsername = "Guest " + Math.random() * (100);
			$scope.create = function() {

				$uibModalInstance.close($scope.newUsername);

			};

	};

		angular
			.module('blocchat')
			.controller('UsernameCtrl', ['$uibModalInstance', '$scope', UsernameCtrl]);
})();
