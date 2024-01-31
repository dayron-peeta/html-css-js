const usuario ={
    nombre: 'Dayron',
    edad: 24,
    amigos: ['Carlos', 'Milena', 'Rolando'],
    saludo: () => {
        console.log('Hola')
    }
}

//.keys() :devuelve un arreglo con las llaves del objeto
console.log(Object.keys(usuario))

//.values() :devuelve un arreglo con los valores del objeto
console.log(Object.values(usuario))

//.entries() :devuelve un arreglo con las parejas clave-valor
console.log(Object.entries(usuario))