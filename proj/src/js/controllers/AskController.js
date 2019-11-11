const init = () => {
    const _setupQuestion = (currentQuestion) => {
        currentQuestion.hasNext = false;
        currentQuestion.answered = false;
        _clearPaitings();
    }
    const _clearPaitings = () => {
        $(`.option`).removeClass('correct');
        $(`.option`).removeClass('incorrect');
    }
    angular.module('med-edu').controller('AskController', ['$scope', 'QuestionProviderAgent','StateManagerAgent', 'JudgeAgent',
            ($scope, questionProvider, stateManagerAgent, judgeAgent) => {
        $scope.questions = questionProvider.getQuestions();
        var currentQuestionIndex = 0;
        var currentQuestion = $scope.currentQuestion = $scope.questions[0];
        _setupQuestion(currentQuestion);

        $scope.answer = (alt) => {
            if(currentQuestion.answered && currentQuestion.answered != alt) return; //verifica se nao respondeu ou se foi diferente da opção.
            currentQuestion.answered =  alt;
            currentQuestion.correctlyAnswered = alt == currentQuestion.correct;
            if(currentQuestion.correctlyAnswered) $(`#option${alt}`).addClass('correct');
            else {
                $(`#option${alt}`).addClass('incorrect');
                $(`#option${currentQuestion.correct}`).addClass('correct');
                $scope.explaining = true;
            };
            currentQuestion.hasNext = $scope.questions.length > currentQuestionIndex;

            if($scope.questions.length == (currentQuestionIndex + 1))
                judgeAgent.judge($scope.questions);
        }
        $scope.finish = () => {
            $scope.announcing = true;
            $scope.explaining = false;
        }
        $scope.next = () => {
            currentQuestionIndex = $scope.questions.findIndex(q => !q.answered);
            currentQuestion = $scope.questions[currentQuestionIndex];
            $scope.currentQuestion = currentQuestion;
            
            if(currentQuestion)
                _setupQuestion(currentQuestion);

            if(currentQuestionIndex == ($scope.questions.length - 1))
                $scope.finished = true;
            
            $scope.explaining = false;
        };
        $scope.toNavigate = () => stateManagerAgent.toNavigate();

        $scope.selectQuestion = (index) => {
            if(!$scope.questions[index].answered) return;
            currentQuestionIndex = index;
            currentQuestion = $scope.currentQuestion = $scope.questions[index];
            _clearPaitings();
            $scope.answer($scope.questions[index].answered);
        }
    }]);

    var app = angular.module('med-edu');
    app.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);
}

export default init;