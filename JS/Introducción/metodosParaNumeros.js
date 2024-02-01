
const numero = 10
console.log(typeof numero) //devuelve el valor y tipo de dato  de la variable

//.toString() convierte un numero a string
const texto = numero.toString()
console.log(texto, typeof texto)

// .toFixed() devuelve un numero con los decimales especificados (si no se especifica lo devuelve sin decimales)
const numpi = -3.1415;
console.log(numpi.toFixed(5))

// parseInt() intenta transformar el valor a tipo entero (es función, no método) es util en el prompt q captura los datos como string. Si se le da datos decimales los redondea por defecto 
// const numero1 = prompt('Escribe un numero')
// const numero2 = prompt('Escribe un numero')

// const numero1 = parseInt(prompt('Escribe un numero'))
// const numero2 = parseInt(prompt('Escribe un numero'))
// console.log(numero1 + numero2)

// parseFloat() intenta transformar el valor a tipo float para no despreciar decimales
// const numero3 = parseFloat(prompt('Escribe un numero'))
// const numero4 = parseFloat(prompt('Escribe un numero'))
// console.log(numero3 + numero4)

// Math.random() //Genera un número al azar entre 0 y 1. Math es un obj de JS que contiene métodos 
const numeroRandom = Math.random()
console.log(Math.floor(numeroRandom * 101))

//Math.floor() redondea hacia abajo un numero
console.log(Math.floor('10.99'))

//Math.ceil() redondea hacia arriba un numero
console.log(Math.ceil('10.1'))

//Math.round() redondea un numero hacia el entero mas cercano
console.log(Math.round('10.5'))