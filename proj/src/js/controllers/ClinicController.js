const init = () => {

    angular.module('med-edu').controller('ClinicController', ['$scope', 'StateManagerAgent', 
            ($scope, stateManagerAgent) => {
        const maxLevel = stateManagerAgent.getMaxLevel();
        $scope.rewardImage = `level${maxLevel}.jpg`;
        $scope.toNavigate = () => stateManagerAgent.toNavigate()
    }]);
}

export default init;