//va a ejecutar código en dependencia del valor de la variable
const usuario = {
    nombre: 'Sam',
    pais: 'USA',
}

// if (usuario.pais === 'USA') {
//     console.log('el usuario es de')
// }

//solo maneja un valor
switch (usuario.pais) { 
    case 'USA': console.log('es americano'); break
    case 'España': console.log('es español'); break
    case 'Argentina': console.log('es argentino'); break
    default: console.log('es de otro país') //variable a ejecutar si no coincide ningún caso
}