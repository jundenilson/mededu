const init = () => {

    angular.module('med-edu').controller('ClinicController', ['$scope', 'StateManagerAgent', 
            ($scope, stateManagerAgent) => {
        const maxLevel = stateManagerAgent.getMaxLevel() - 1;
        $scope.rewardImage = `level${maxLevel}.jpg`;
        $scope.toNavigate = () => stateManagerAgent.toNavigate()
    }]);
}

export default init;