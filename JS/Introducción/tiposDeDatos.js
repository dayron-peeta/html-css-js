//string
const name = 'hola"Paola"' //podemos usar comillas en un string si son diferentes a las que usemos por fuera
const names = 'hola\'Paola\'' //para usar las mismas debemos escaparlas con \

//number
const numero = 4
const num2 = -4.56456

//boolean
const usuarioConectado = false
const mayorQue = 1 > 2

console.log(mayorQue)

//arrays
const arreglo= [111, 10, 4 ,6] //se define con brackets
const arreglo2= [1, 'pepe', true ,{propiedad: 'valor'}, [3, 2, 1]] //dentro puedo almacenar cualquier dato(num,txt,bool,obj,array)
console.log(arreglo,  arreglo2)
//se accede a una posición específica utilizando [i] (el índice comienza en 0)
console.log(arreglo[0])

//objeto clave-valor
const persona= {
    nombre: 'Carlos',
    edad: 24,
    carro:{ //dentro de los objetos puede haber más objetos
        marca: 'gelee',
        color: 'negro',
    },
}

console.log(persona) //accediendo al objeto
console.log(persona.nombre) //accediendo a atributos específicos 
console.log(persona.carro.color) //accediendo a atributos específicos de objetos dentro del objeto

//function
function hola(){ //definición
    console.log('hola function')
}

hola() //llamada

//null
//undefined

