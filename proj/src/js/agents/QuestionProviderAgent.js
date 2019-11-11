import _ from 'lodash'
class QuestionProviderAgent {
    static get $inject(){ return ['StateManagerAgent']};
    stateAgent = {};
    constructor(stateManagerAgent){
        this.stateAgent = stateManagerAgent;
    };
    getQuestions(){
        var resultingQuestions = [];

        //TODO: Retirar quando vierem as perguntas
        resultingQuestions = _.shuffle(_questions);
        return angular.copy(resultingQuestions);

        if(stateAgent.isLeveling)
            resultingQuestions = this.getLevelingQuestions();
        const questions = _.shuffle(_questions);
        resultingQuestions = _.take(questions.filter(q => q.level == this.stateAgent.currentLevel), 10);
        return angular.copy(resultingQuestions);
    }
    getLevelingQuestions(){
        const questions = _.shuffle(_questions);
        const lv1 = _.take(questions.filter(q => q.level == 1), 2);
        const lv2 = _.take(questions.filter(q => q.level == 2), 2);
        const lv3 = _.take(questions.filter(q => q.level == 3), 2);
        const lv4 = _.take(questions.filter(q => q.level == 4), 2);
        const lv5 = _.take(questions.filter(q => q.level == 5), 2);
        return [...lv1,...lv2,...lv3,...lv4,...lv5]
    }
}

export default () => angular.module('med-edu').service('QuestionProviderAgent', QuestionProviderAgent)
  
  
const _questions = [
    {
        "level": 1,
        "question": "Quais os possíveis sintomas da miopia?",
        "option1": "Dor de cabeça, irritação ocular e lacrimejamento.",
        "option2": "Dor de cabeça, irritação auricular e cansaço.",
        "option3": "Irritação ocular, dor de cabeça e cansaço.",
        "correct": "1",
        "explanationVideo": "https://www.youtube.com/embed/McPPZBlg6OQ?start=82",
        "explanationAudio": "",
        "explanationText": "",
        "explanationImage": "",
    },
    {
        "level": 2,
        "question": "Além da má digestão, qual pode ser o motivo causador da azia?",
        "option1": "O hábito de fumar pode lesionar as células do esôfago causando dor.",
        "option2": "O retorno do suco gástrico para o esôfago, que por ser ácido acaba lesionando as células do esôfago e causando dor.",
        "option3": "Todas as respostas acima.",
        "correct": "3",
        "explanationVideo": "",
        "explanationAudio": "",
        "explanationText": "A azia pode ser causada por fatores como má digestão dos alimentos, excesso de peso, gravidez e ter o hábito de fumar. O principal sintoma de azia é a sensação de queimação que inicia no final do osso esterno, que está entre as costelas, e que vai até a garganta. Fonte: https://www.tuasaude.com/causas-da-azia/",
        "explanationImage": "",
    },
    {
        "level": 3,
        "question": "Quais os primeiros socorros se alguém está tendo um Acidente Vascular Cerebral - AVC?",
        "option1": "Verificar a respiração do indivíduo, colocando-o de barriga para cima e caso não respire iniciar a massagem cardíaca.",
        "option2": "Chamar a ambulância, verificar a respiração do indivíduo e após garantir a respiração colocá-lo de lado para aguardar o socorro.",
        "option3": "Chamar a ambulância, verificar a respiração do indivíduo, colocando-o de barriga para cima e caso não respire iniciar a massagem cardíaca.",
        "correct": "2",
        "explanationVideo": "",
        "explanationAudio": "",
        "explanationText": "Os primeiros socorros para AVC podem evitar sequelas graves, como ficar paralisado ou não falar e, em alguns casos, podem permanecer para toda a vida, diminuindo a qualidade de vida do paciente. Por isso, por isso, é importante socorrer o individuo que está tendo um AVC o mais rápido possível para evitar sequelas. Fonte: https://www.tuasaude.com/primeiros-socorros-para-avc/",
        "explanationImage": "",
    },
    {
        "level": 4,
        "question": "Uma pessoa está com crise hipertensiva se...",
        "option1": "Sua pressão arterial está abaixo de 12x8.",
        "option2": "Sua pressçao arterial está acima de 12x8.",
        "option3": "Sua pressão arterial está acima de 12x18.",
        "correct": "2",
        "explanationVideo": "https://www.youtube.com/embed/1HDSpB_nYxs",
        "explanationAudio": "",
        "explanationText": "",
        "explanationImage": "",
    },
    {
        "level": 5,
        "question": "Por que a insulina é importante?",
        "option1": "Diminui a quantidade de glicose nas células.",
        "option2": "Permite que a glicose entre na corrente sanguínea.",
        "option3": "Permite que a glicose entre nas células.",
        "correct": "3",
        "explanationVideo": "https://www.youtube.com/embed/vAUbt17h6Co",
        "explanationAudio": "",
        "explanationText": "",
        "explanationImage": "",
    },
    {
        "level": 3,
        "question": "O que é tuberculose?",
        "option1": "Uma doença bacteriana que ataca os pulmões.",
        "option2": "Uma doença viral que ataca os pulmões.",
        "option3": "Uma doença genética que ataca os pulmões.",
        "correct": "1",
        "explanationVideo": "https://www.youtube.com/embed/F0UVtuoTAGI",
        "explanationAudio": "",
        "explanationText": "",
        "explanationImage": "",
    },
    {
        "level": 1,
        "question": "Como surge o câncer?",
        "option1": "O câncer surge por um vírus que altera o DNA da célula, que passa a receber instruções erradas para sua ações.",
        "option2": "O câncer surge por uma mutação genética que altera o DNA da célula, que passa a receber instruções erradas para sua atividades.",
        "option3": "O câncer surge por uma mutação genética que altera mata as células e pode atingir todo o corpo, causando a morte do paciente.",
        "correct": "2",
        "explanationVideo": "",
        "explanationAudio": "",
        "explanationText": "O câncer surge a partir de uma mutação genética, ou seja, de uma alteração no DNA da célula, que passa a receber instruções erradas para as suas atividades. As alterações podem ocorrer em genes especiais, denominados proto-oncogenes, que a princípio são inativos em células normais. Quando ativados, os proto-oncogenes tornam-se oncogenes, responsáveis por transformar as células normais em células cancerosas. Fonte: https://www.inca.gov.br/como-surge-o-cancer",
        "explanationImage": "",
    },
    {
        "level": 2,
        "question": "Qual é a relação entre a fibrilação atrial e AVC?",
        "option1": "O AVC pode causar a fibrilação atrial.",
        "option2": "A fibrilação atrial pode causar o AVC.",
        "option3": "Nenhuma das respostas anteriores.",
        "correct": "2",
        "explanationVideo": "https://www.youtube.com/embed/jQgj_pcXtLg",
        "explanationAudio": "",
        "explanationText": "",
        "explanationImage": "",
    },
    {
        "level": 4,
        "question": "Quando ocorre a biodisponibilidade do álcool?",
        "option1": "Quando o álcool permanece no sangue por mais tempo do que o esperado porque as células não o absorvem.",
        "option2": "Quando o álcool permanece nas células por mais tempo porque foi absorvido rápido demais.",
        "option3": "Quando o álcool fica exposto no cérebro por mais tempo porque a quantidade ingerida foi alta demais.",
        "correct": "1",
        "explanationVideo": "",
        "explanationAudio": "",
        "explanationText": "",
        "explanationImage": "alcool.jpg",
    },
    {
        "level": 5,
        "question": "Quais são as causas da embolia pulmonar?",
        "option1": "Cirurgias extensas, câncer, gravidez, obesidade e traumas.",
        "option2": "Pneumonia, doenças virais, cirurgias extensas.",
        "option3": "Genética e pneumonia.",
        "correct": "1",
        "explanationVideo": "",
        "explanationAudio": "",
        "explanationText": "Embolia pulmonar é causada pela obstrução das artérias dos pulmões por coágulos. Fatores de risco são imobilidade prolongada, cirurgias, câncer, tabagismo, anticoncepcionais com estrógeno e reposição hormonal. Fonte: https://drauziovarella.uol.com.br/doencas-e-sintomas/embolia-pulmonar/",
        "explanationImage": "",
    },
];