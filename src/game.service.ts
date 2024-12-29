import { options, infoUser, infoPc} from './game.model';

export function choicePc():string{
    let random = Math.floor(Math.random()*3);
    return options[random];
}

export function winnerForMatch(optionsSelected:{ player:string, pc:string}){
    if (optionsSelected.player === optionsSelected.pc) {
        return `Has empatado esta ronda`;
    }else if(optionsSelected.player === options[0] && optionsSelected.pc === options[2]){
        points(1,1);
        return `Has ganado esta ronda ${infoUser[0].name} felicidades 🎉🎉`;
    }else if(optionsSelected.player === options[1] && optionsSelected.pc === options[0]){
        points(1,1);
        return `Has ganado esta ronda ${infoUser[0].name} felicidades 🎉🎉`;
    }else if(optionsSelected.player === options[2] && optionsSelected.pc === options[1]){
        points(1,1);
        return `Has ganado esta ronda ${infoUser[0].name} felicidades 🎉🎉`;
    }else{
        points(1);
        return  `Ha ganado esta ronda la maquina`;
    }
}

function points(counterPoints:number, winner: number = 0) {
    if (infoUser[0].score === 2){
        infoUser[0].score +=counterPoints;
    }else if (infoPc[0].score === 2) {
        infoPc[0].score +=counterPoints;
    }else{
        return winner===1?infoUser[0].score+=counterPoints:infoPc[0].score+=counterPoints;
    }
}

