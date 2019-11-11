const init = function() {
  angular.module('med-edu').controller('NavController', [ '$scope', 'StateManagerAgent',
    ($scope, stateManagerAgent) => {
      $scope.toLevel = (x) => stateManagerAgent.toLevel(x);
      $scope.toLeveling = () => stateManagerAgent.toLeveling();
      $scope.maxLevel = stateManagerAgent.getMaxLevel(); 
    }
  ])
}

export default init;