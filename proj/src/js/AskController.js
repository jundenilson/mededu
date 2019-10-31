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
            if(currentQuestion.answered && currentQuestion.answered != alt) return; //verifica se nao respondeu ou se foi diferente da opção.
            currentQuestion.answered =  alt;
            currentQuestion.correctlyAnswered = alt == currentQuestion.correct;
            if(currentQuestion.correctlyAnswered) $(`#option${alt}`).addClass('correct');
            else {
                $(`#option${alt}`).addClass('incorrect');
                $(`#option${currentQuestion.correct}`).addClass('correct');
                if(currentQuestion.explanationVideo != ''){
                    $scope.video = true;
                }
                if(currentQuestion.explanationAudio != ''){
                    $scope.audio = true;
                }
                if(currentQuestion.explanationText != ''){
                    $scope.text = true;
                }
                if(currentQuestion.explanationImage != ''){
                    $scope.image = true;
                }
                $scope.explaining = true;
            };
            currentQuestion.hasNext = $scope.questions.length > currentQuestionIndex;

            if($scope.questions.length == (currentQuestionIndex + 1)){
                const level = questionProvider.judge($scope.questions);
                $scope.announce = `Parabéns, você conquistou o nivel ${level}`;
            }

            console.log(currentQuestionIndex);
        
        }
        $scope.finish = () => {
            $scope.announcing = true;
            $scope.explaining = false;
            $scope.video = false;
            $scope.audio = false;
            $scope.text = false;
            $scope.image = false;    
        }
        $scope.next = () => {
            currentQuestionIndex = $scope.questions.findIndex(q => !q.answered);
            currentQuestion = $scope.questions[currentQuestionIndex];
            $scope.currentQuestion = currentQuestion;
            console.log(currentQuestion)
            console.log(currentQuestionIndex)
            
            if(currentQuestion){
                _setupQuestion(currentQuestion);
            }

            if(currentQuestionIndex == ($scope.questions.length - 1)) {
                $scope.finished = true;
            }
            
            $scope.explaining = false;
            $scope.video = false;
            $scope.audio = false;
            $scope.text = false;
            $scope.image = false;                       
        };
        $scope.toNavigate = () => {
            $scope.$parent.$parent.state = 'navigating';
        }
        $scope.selectQuestion = (index) => {
            $scope.video = false;
            $scope.audio = false;
            $scope.text = false;
            $scope.image = false;
            if(!$scope.questions[index].answered) return;
            currentQuestionIndex = index;
            currentQuestion = $scope.currentQuestion = $scope.questions[index];
            _clearPaitings();
            $scope.answer($scope.questions[index].answered);
            if(currentQuestion.explanationVideo != '' && !currentQuestion.answered){
                $scope.video = true;
            }
            if(currentQuestion.explanationAudio != '' && !currentQuestion.answered){
                $scope.audio = true;
            }
            if(currentQuestion.explanationText != '' && !currentQuestion.answered){
                $scope.text = true;
            }
            if(currentQuestion.explanationImage != '' && !currentQuestion.answered){
                $scope.image = true;
            }
        }
    }])
    var app = angular.module('med-edu');
    app.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);
}

export default init;