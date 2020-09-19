//Promise

const aplicarDescuento = new Promise((resolve, reject)=>{
setTimeout(() => {
    let descuento = false;

    if(descuento){
        resolve('Descuento aplicado');
    }else {
        reject('No se pudo aplicar el descuento');
    }
}, 3000);
});

aplicarDescuento.then(resultado =>{
    console.log(resultado);
}).catch(error => {
    console.log(error);
});

//Ajax

const descargarUser = cantidad => new Promise((resolve,reject)=>{
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
    //llamado ajax
    /*
    1 - Crear llamado
    2 - Abrir conexion
    3 - Mandar datos
    4 - Enviar datos (peticion)
    (opcional error)
    */
   //Abrir la conexion
   const xhr = new XMLHttpRequest();
   xhr.open('GET', api, true);
   //Mandar datos
   xhr.onload = ()=>{
       if (xhr.status === 200){
           resolve(JSON.parse(xhr.responseText).results);
       }else{
           reject(Error(xhr.statusText));
       }
   }
   xhr.onerror = (error) => reject(error);
   //Enviar datos
   xhr.send();
});

descargarUser(10).then(
    miembros => imprimirHTML(miembros),
    error => console.error(
        new Error('Hubo un error ' + error)
    )
);
//Mandar resultado a HTML
function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Imagen: 
                    <img src="${usuario.picture.medium}">
            </li>
        `;
    });
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
};

