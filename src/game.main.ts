import { choicePc, winnerForMatch} from './game.service'
import { options, infoUser, infoPc } from './game.model'
import * as readlineSync from 'readline-sync';


console.log('Bienvenido al Juego de Piedra, Papel o Tijeras!');
// Wait for user's response.
let userName = readlineSync.question('Escribe Tu nombre: ');

infoUser[0].name = userName;

while (infoUser[0].score < 2 && infoPc[0].score < 2) {
    
    let eleccionUser = readlineSync.question(`Escoge 1 para ${options[0]}, 2 para ${options[1]} y 3 para ${options[2]} : `)
    let eleccionPc: string = choicePc();

    console.log(`La maquina escogio ${eleccionPc}`);
    console.log(`tu escogiste ${options[Number(eleccionUser)-1]}`);
    let result : string ;

    switch (eleccionUser) {        
        case '1':         
            result = winnerForMatch({player:options[0], pc: eleccionPc});
            console.log(result);            
            break;
        case '2':         
            result = winnerForMatch({player:options[1], pc: eleccionPc});
            console.log(result);  
            break;
        case '3':
            result = winnerForMatch({player:options[2], pc: eleccionPc});
            console.log(result);  
            break;
        default:
            console.log('Opcion no valida');
            break;
    }
}

infoUser[0].score === 2 ? console.log(`Felicidades ${infoUser[0].name} has ganado el Mejor de 3 en piedra papel y tijera con ${infoUser[0].score} puntos y la maquina quedo con ${infoPc[0].score} puntos`)
 : console.log(`La maquina ha ganado el Mejor de 3 en piedra papel y tijera con ${infoPc[0].score} puntos y tú has quedo con ${infoUser[0].score} puntos`);
 
