const init = function(){
    const _login = (user, password) => user == 'uerj' && password == '123456'
    angular.module('med-edu').controller('AuthController', ['$scope', function($scope){
        $scope.user = 'uerj';
        $scope.password = '123456'

        $scope.login = () => {
            if(_login($scope.user, $scope.password)){
                $scope.$parent.$parent.state = 'navigating'
            } else {
                $scope.badCredentials = true;
            }
        };
    }])
}

export default init;