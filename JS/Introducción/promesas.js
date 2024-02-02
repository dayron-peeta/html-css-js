//Promesas Estructuras q se ejecutan cuando termina de hacerse una operación

const promesa = new Promise((resolve , reject ) => {
    //acción q se ejecutará

    setTimeout(() =>{
        const exito = true

        if(exito){
            resolve("Operación exitosa") //con el método resolve se puede enviar un mensaje opcional
        } else {
            reject('Operación fallida')
        }
    }, 4000) //simulando q una operación tarda tiempo
})


promesa.then((mensaje) => { //cuando responde Positivamente la promesa se ejecuta esta parte
    alert(mensaje)
})

promesa.catch((mensaje) => { //cuando responde Negativamente la promesa se ejecuta esta parte
    alert(mensaje)
})