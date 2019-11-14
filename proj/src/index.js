// import './html/auth.html'
import './css/index.css'

import QuestionProviderAgent from './js/agents/QuestionProviderAgent'
import HealthMonitorAgent from './js/agents/HealthMonitorAgent'
import StateManagerAgent from './js/agents/StateManagerAgent'
import JudgeAgent from './js/agents/JudgeAgent'
import AuthController from './js/controllers/AuthController'
import NavController from './js/controllers/NavController'
import AskController from './js/controllers/AskController'
import AnnounceController from './js/controllers/AnnounceController'
import ClinicController from './js/controllers/ClinicController'
import 'angular'
import _ from 'lodash'

angular.module('med-edu', []);
AuthController();
NavController();
AskController();
QuestionProviderAgent();
HealthMonitorAgent();
StateManagerAgent();
AnnounceController();
ClinicController();
JudgeAgent();

angular.module('med-edu').controller('IndexController', ['$scope', 'StateManagerAgent', function($scope, stateManagerAgent){
    $scope.state = 'auth';
    // $scope.state = 'navigating'
    stateManagerAgent.init((state) => $scope.state = state)
}]);