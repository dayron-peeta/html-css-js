//condiciones con menos líneas


// const boleto = 'vip'
// let codigoDeAcceso;

// if(boleto === 'vip'){
//     codigoDeAcceso =  'vip-123-234'
// } else {
//     codigoDeAcceso =  'regular-123-234'
// }

// console.log(codigoDeAcceso)


const boleto = 'vip'
const codigoDeAcceso= (boleto === 'vip') ? 'vip-123-234' : 'regular-123-234' //declarar valor de variable dependiendo de.. No son necesarios los ()

console.log(codigoDeAcceso)

//uso if estructura COMPROBACIÓN ? código a ejecutar : código alternativo
boleto === 'vip' ? console.log('boleto vip') : console.log('boleto regular')
