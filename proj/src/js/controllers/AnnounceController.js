const init = function() {
    angular.module('med-edu').controller('AnnounceController', [ '$scope', 'StateManagerAgent',
      ($scope, stateManagerAgent) => {
        $scope.message = stateManagerAgent.currentMsg;
        $scope.next = () => stateManagerAgent.next();
      }
    ])
  }
  
  export default init;