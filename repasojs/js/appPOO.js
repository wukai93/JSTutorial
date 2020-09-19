
//POO en JS
export class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}
//Clase con herencia de Tarea
class ComprarPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        //super le indica que tome los parametros de la clase padre
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }
    //se puede reescribir metodos del padre
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad} con cantidad de ${this.cantidad}`;
    }
}
//Objetos de tarea
let tarea1 = new Tarea('Aprender JS','Alta');
let tarea2 = new Tarea('Preparando cafe', 'Baja');
let tarea3 = new Tarea('Resolver incidencia','Media');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());

// Compras

let compra1 = new ComprarPendientes('Ivan','Urgente',5)
console.log(compra1);
console.log(compra1.mostrar());

//Exportar variable por default 
const nombreTarea = 'Pasear al perro';
export default nombreTarea;

export const inforPersona = {
    nombre: 'Ivan',
    apellido: 'Penagos',
    edad: 27,
    sexo: 'Masculino'
};
//exportar funcion
export const crearTarea = (tarea, urgencia) =>{
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`
};

export const tareaCompletada = ()=>{
    console.log(`Tarea completada`);
}
