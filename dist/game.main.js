"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const game_service_1 = require("./game.service");
const game_model_1 = require("./game.model");
const readlineSync = __importStar(require("readline-sync"));
console.log('Bienvenido al Juego de Piedra, Papel o Tijeras!');
// Wait for user's response.
let userName = readlineSync.question('Escribe Tu nombre: ');
game_model_1.infoUser[0].name = userName;
while (game_model_1.infoUser[0].score < 2 && game_model_1.infoPc[0].score < 2) {
    let eleccionUser = readlineSync.question(`Escoge 1 para ${game_model_1.options[0]}, 2 para ${game_model_1.options[1]} y 3 para ${game_model_1.options[2]} : `);
    let eleccionPc = (0, game_service_1.choicePc)();
    console.log(`La maquina escogio ${eleccionPc}`);
    console.log(`tu escogiste ${game_model_1.options[Number(eleccionUser) - 1]}`);
    let result;
    switch (eleccionUser) {
        case '1':
            result = (0, game_service_1.winnerForMatch)({ player: game_model_1.options[0], pc: eleccionPc });
            console.log(result);
            break;
        case '2':
            result = (0, game_service_1.winnerForMatch)({ player: game_model_1.options[1], pc: eleccionPc });
            console.log(result);
            break;
        case '3':
            result = (0, game_service_1.winnerForMatch)({ player: game_model_1.options[2], pc: eleccionPc });
            console.log(result);
            break;
        default:
            console.log('Opcion no valida');
            break;
    }
}
game_model_1.infoUser[0].score === 2 ? console.log(`Felicidades ${game_model_1.infoUser[0].name} has ganado el Mejor de 3 en piedra papel y tijera con ${game_model_1.infoUser[0].score} puntos y la maquina quedo con ${game_model_1.infoPc[0].score} puntos`)
    : console.log(`La maquina ha ganado el Mejor de 3 en piedra papel y tijera con ${game_model_1.infoPc[0].score} puntos y tú has quedo con ${game_model_1.infoUser[0].score} puntos`);
