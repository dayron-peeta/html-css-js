//todas las declaradas con const o let y se encuentren dentro de un bloque {}
//solo podemos acceder a ellas dentro del bloque

const edad = 19
//let accesoPermitido = false //podemos declarar varias variables con el mismo nombre si no están dentro del mismo bloque
if(edad >= 18){
    const accesoPermitido = true 
    //console.log(accesoPermitido) //va a utilizar 1ro la q esté dentro
    //desde bloques anidados también se puede acceder
    if(true){console.log(accesoPermitido)}
    const miFuncion  = () => {console.log(accesoPermitido)}
    miFuncion()
}

//console.log(accesoPermitido) //desde aquí no se podrá acceder a la  de dentro

if (true){
    var nombre = 'Dayron'
}
console.log(nombre)

