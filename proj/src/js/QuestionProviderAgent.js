import _ from 'lodash'
// QuestionProviderAgent.$inject = [];
class QuestionProviderAgent {
    constructor(){
        this.mode = ''; // TODO: resetar
        this.questions = [];
        this.setMode('leveling')
    };
    setMode(mode) {
        this.mode = mode;
        if(this.mode == 'leveling'){
            // this.questions = questions;
            this.questions = _.shuffle(_questions);
        }
    }
    getQuestions(){
        return this.questions;
    }
    judge(questions) {
        if(this.mode == 'leveling'){
            const allLevel1 = questions.filter(q => q.level == 1 && q.correctlyAwnsered).length == 2;
            const allLevel2 = questions.filter(q => q.level == 2 && q.correctlyAwnsered).length == 2;
            const allLevel3 = questions.filter(q => q.level == 3 && q.correctlyAwnsered).length == 2;
            const allLevel4 = questions.filter(q => q.level == 4 && q.correctlyAwnsered).length == 2;
            if(allLevel1 && allLevel2 && allLevel3 && allLevel4) return 5;
            if(allLevel1 && allLevel2 && allLevel3) return 4;
            if(allLevel1 && allLevel2) return 3;
            if(allLevel1) return 2;
            return 1;
        }
    }
}

export default () => angular.module('med-edu').service('QuestionProviderAgent', QuestionProviderAgent)
  
  
const _questions = [
    {
        "level": 1,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa",
        "option2": "bbb",
        "option3": "ccc",
        "correct": "3",
        "explanationText": "lorem 2",
    },
    {
        "level": 2,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa2",
        "option2": "bbb2",
        "option3": "ccc2",
        "correct": "3",
        "explanationVideo": "http://youtube.com....",
    },
    {
        "level": 3,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa2",
        "option2": "bbb2",
        "option3": "ccc2",
        "correct": "3",
        "explanationVideo": "http://youtube.com....",
    },
    {
        "level": 4,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa",
        "option2": "bbb",
        "option3": "ccc",
        "correct": "3",
        "explanationText": "lorem 2",
    },
    {
        "level": 5,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa2",
        "option2": "bbb2",
        "option3": "ccc2",
        "correct": "3",
        "explanationVideo": "http://youtube.com....",
    },
    {
        "level": 3,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa2",
        "option2": "bbb2",
        "option3": "ccc2",
        "correct": "3",
        "explanationVideo": "http://youtube.com....",
    },
    {
        "level": 1,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa",
        "option2": "bbb",
        "option3": "ccc",
        "correct": "3",
        "explanationText": "lorem 2",
    },
    {
        "level": 2,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa2",
        "option2": "bbb2",
        "option3": "ccc2",
        "correct": "3",
        "explanationVideo": "http://youtube.com....",
    },
    {
        "level": 4,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa2",
        "option2": "bbb2",
        "option3": "ccc2",
        "correct": "3",
        "explanationVideo": "http://youtube.com....",
    },
    {
        "level": 5,
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.R:2",
        "option1": "aaa2",
        "option2": "bbb2",
        "option3": "ccc2",
        "correct": "3",
        "explanationVideo": "http://youtube.com....",
    },
];