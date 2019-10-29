// import './html/auth.html'
import './css/index.css'

import QuestionProviderAgent from './js/QuestionProviderAgent'
import HealthMonitorAgent from './js/HealthMonitorAgent'
import AuthController from './js/AuthController'
import NavController from './js/NavController'
import AskController from './js/AskController'
import 'angular'
import _ from 'lodash'

angular.module('med-edu', []);
angular.module('med-edu').controller('IndexController', ['$scope', function($scope){
    $scope.state = 'auth'
    // $scope.state = 'asking'
}]);




AuthController();
NavController();
AskController();
QuestionProviderAgent();
HealthMonitorAgent();