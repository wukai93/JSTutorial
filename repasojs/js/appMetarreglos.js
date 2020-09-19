//metodos en arreglos
const personas = [
    {nombre: 'Ivan', edad: 27, aprendiendo: 'JavaScript'},
    {nombre: 'Alejandro', edad: 28, aprendiendo: 'React'},
    {nombre: 'Juan', edad: 22, aprendiendo: 'C#'},
    {nombre: 'Miguel', edad: 30, aprendiendo: 'VueJS'}
]

console.log(personas);

//Filtrar informacion de un arreglo

const mayores = personas.filter(persona => {
    return persona.edad > 27;
})
console.log(mayores);

const usuario = personas.find(personas =>{
    return personas.nombre === 'Ivan';
})
console.log(usuario);

//Reduce

let total = personas.reduce((edadTotal, personas) =>{
    return edadTotal + personas.edad;
},0);

console.log(total);