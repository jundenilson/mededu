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
    
    angular.module('med-edu').controller('AskController', ['$scope', 'QuestionProviderAgent', ($scope, questionProvider) => {
        $scope.questions = angular.copy(questionProvider.getQuestions());
        var currentQuestionIndex = 0;
        var currentQuestion = $scope.currentQuestion = $scope.questions[0];
        _setupQuestion(currentQuestion);

        $scope.answer = (alt) => {
            // debugger;
            if(currentQuestion.answered && currentQuestion.answered != alt) return;
            currentQuestion.answered =  alt;
            currentQuestion.correctlyAnswered = alt == currentQuestion.correct;
            if(currentQuestion.correctlyAnswered) $(`#option${alt}`).addClass('correct');
            else {
                $(`#option${alt}`).addClass('incorrect');
                $(`#option${currentQuestion.correct}`).addClass('correct');
            };
            currentQuestion.hasNext = $scope.questions.length > currentQuestionIndex + 1;
            if(!currentQuestion.hasNext) {
                const level = questionProvider.judge($scope.questions);
                $scope.announce = `Parabéns, você conquistou o nivel ${level}`;
                $scope.announcing = true;
            }
        }
        $scope.next = () => {
            currentQuestionIndex = $scope.questions.findIndex(q => !q.answered);
            currentQuestion = $scope.questions[currentQuestionIndex];
            $scope.currentQuestion = currentQuestion;
            _setupQuestion(currentQuestion);
        };
        $scope.toNavigate = () => {
            $scope.$parent.$parent.state = 'navigating';
        }
        $scope.selectQuestion = (index) => {
            if(!$scope.questions[index].answered) return;
            currentQuestionIndex = index;
            currentQuestion = $scope.currentQuestion = $scope.questions[index];
            _clearPaitings();
            $scope.answer($scope.questions[index].answered);
        }
    }])
}

export default init;