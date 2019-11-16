import _ from 'lodash'
class StateManagerAgent {
    stateSetter = null;
    currentLevel = 0;
    maxLevel = 0;
    isReinforcing = false;
    isLeveling =  false;
    isClinic = false;
    currentMsg = '';
    next = () => null;
    constructor(){
        this.maxLevel = window.localStorage.getItem('maxLv') || 0;
    };
    init(fn) {
        this.stateSetter = fn;
    };
    toLevel(x){
        this.toDefaults();
        this.currentLevel = x;
        this.stateSetter('asking');
    }
    toClinic(){
        this.stateSetter('clinic');
    }
    toReinforcement(){
        this.toDefaults();
        this.isReinforcing = true;
        this.stateSetter('asking');
    }
    toLeveling(){
        console.log("entrou"); 
        this.toDefaults();
        this.isLeveling = true;
        this.stateSetter('asking');
    }
    toNavigate(){
        this.toDefaults();
        this.stateSetter('navigating');
    }
    getMaxLevel(){
        return this.maxLevel;
    }
    setMaxLevel(x){
        this.maxLevel = x <= 3 ? x : 3;
        console.log('max', this.maxLevel);
        window.localStorage.setItem('maxLv', this.maxLevel)
    }
    announce(msg, then = null){
        this.currentMsg =  msg;
        this.stateSetter('announcing');
        this.next = (then || this.toNavigate);
    }
    toDefaults(){
        this.currentLevel = 0;
        this.isReinforcing = false;
        this.isLeveling =  false;
        this.currentMsg = '';        
    }
}

export default () => angular.module('med-edu').service('StateManagerAgent', StateManagerAgent)
