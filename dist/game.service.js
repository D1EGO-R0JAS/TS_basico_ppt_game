"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choicePc = choicePc;
exports.winnerForMatch = winnerForMatch;
const game_model_1 = require("./game.model");
function choicePc() {
    let random = Math.floor(Math.random() * 3);
    return game_model_1.options[random];
}
function winnerForMatch(optionsSelected) {
    if (optionsSelected.player === optionsSelected.pc) {
        return `Has empatado esta ronda`;
    }
    else if (optionsSelected.player === game_model_1.options[0] && optionsSelected.pc === game_model_1.options[2]) {
        points(1, 1);
        return `Has ganado esta ronda ${game_model_1.infoUser[0].name} felicidades 🎉🎉`;
    }
    else if (optionsSelected.player === game_model_1.options[1] && optionsSelected.pc === game_model_1.options[0]) {
        points(1, 1);
        return `Has ganado esta ronda ${game_model_1.infoUser[0].name} felicidades 🎉🎉`;
    }
    else if (optionsSelected.player === game_model_1.options[2] && optionsSelected.pc === game_model_1.options[1]) {
        points(1, 1);
        return `Has ganado esta ronda ${game_model_1.infoUser[0].name} felicidades 🎉🎉`;
    }
    else {
        points(1);
        return `Ha ganado esta ronda la maquina`;
    }
}
function points(counterPoints, winner = 0) {
    if (game_model_1.infoUser[0].score === 2) {
        game_model_1.infoUser[0].score += counterPoints;
    }
    else if (game_model_1.infoPc[0].score === 2) {
        game_model_1.infoPc[0].score += counterPoints;
    }
    else {
        return winner === 1 ? game_model_1.infoUser[0].score += counterPoints : game_model_1.infoPc[0].score += counterPoints;
    }
}
