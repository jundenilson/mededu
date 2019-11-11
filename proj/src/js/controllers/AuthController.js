const init = function(){
    const _login = (user, password) => user == 'uerj' && password == '123456'
    angular.module('med-edu').controller('AuthController', ['$scope', 'StateManagerAgent', function($scope,stateManagerAgent){
        $scope.user = 'uerj';
        $scope.password = '123456'

        $scope.login = () => {
            if(_login($scope.user, $scope.password)){
                stateManagerAgent.toNavigate();
            } else {
                $scope.badCredentials = true;
            }
        };
    }])
}

export default init;