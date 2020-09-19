//Modulos en JS
// El import sin {} detecta el export por default y no importa el nombre de la
// variable este podra reconocer que debe usar el default
import trabajo from './appPOO.js'
console.log(trabajo);
//Al usar llaves busca los objetos exportados especificos
import {inforPersona, crearTarea,tareaCompletada,Tarea} from "./appPOO.js"
console.log(inforPersona);

//importar funcion
const tarea1 = crearTarea('Comprar tortillas','media');

console.log(tarea1);
tareaCompletada();//

const tarea2 = new Tarea('Aprender JS','Urgencite');
console.log(tarea2);
console.log(tarea2.mostrar());