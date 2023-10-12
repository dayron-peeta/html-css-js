//objeto clave-valor
const personaArreglo = [

]
const persona= {
    nombre: 'Carlos', //propiedad (variable dentro de objeto)
    edad: 24,
    correo: 'correo@correo.com',
    suscripciones: { //dentro de los objetos puede haber más objetos
        Web: true,
        Correo: true,
    },
    coloresFavoritos: ['black', 'pink'],
    saludo: function(){ //podemos tener también funciones (estamos definiendo una función que pertenecerá a la propiedad saludo)
        alert('Hola desde la propiedad saludo MÉTODO')
    },
}

console.log(persona) //accediendo al objeto
console.log(persona.nombre) //accediendo a atributos específicos(propiedades) 
console.log(persona['nombre']) //otra forma
const varNombre = 'nombre'
console.log(persona[varNombre]) //otra forma
console.log(persona.suscripciones.Web) //accediendo a atributos específicos de objetos dentro del objeto

//agregar valores
persona.pais = 'Cuba' //cuando la propiedad no existe JS la crea
persona.pais = 'España' //sobrescribiendo
console.log(persona.pais)

//acceder al método (propiedad-función) de un objeto
persona.saludo() //se  accede a ellos con los ()