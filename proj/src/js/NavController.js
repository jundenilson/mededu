const init = function() {
  angular.module('med-edu').controller('NavController', [ '$scope', 'QuestionProviderAgent', ($scope, questionProvider) => {
      $scope.toLeveling = () => {
          $scope.$parent.$parent.state = 'asking';
          questionProvider.setMode('leveling');
      }
    }
  ])
}

export default init;