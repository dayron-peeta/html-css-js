//returns Devuelve información hacia afuera de la función
//retorna hacia la invocación y se puede guardar en una variable
//se puede hacer return sin devolver nada
//el código luego de un return no se ejecuta


//cada función debe hacer una sola tarea específica

// const operación = (tipo, numero1, numero2) =>{
//     let resultado
//     if(tipo === 'suma'){resultado = numero1 + numero2}
//     if(tipo === 'resta'){resultado = numero1 - numero2}
//     return resultado
// }
const operación = (tipo, numero1, numero2) =>{
    if(tipo === 'suma'){return numero1 + numero2}
    let resultado
    if(tipo === 'resta'){resultado = numero1 - numero2}
    return resultado

    //if(tipo === 'resta'){return numero1 - numero2}
}

const miVariable = operación('resta',0, 11)
console.log(miVariable)