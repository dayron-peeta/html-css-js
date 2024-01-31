//parámetros(valores especificados en la definición de la función)
const saludo = (nombre = 'amigo') => { //establecer valor por defecto de parámetros
    console.log(`Hola ${nombre} !`)
}

saludo('Carlos') //argumento: valor que se pasa al invocar la función
saludo('Alex')
saludo('César')
saludo() //devuelve undefined a menos q se establezca valor por defecto en la función

//múltiples parámetros

const operación = (tipo, numero1, numero2) =>{
    if(tipo === 'suma'){console.log(numero1 + numero2)}
    if(tipo === 'resta'){console.log(numero1 - numero2)}
}
operación ('suma',245,5)
operación ('resta',2,54)


