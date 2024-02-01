// Operador Spread toma los elementos de un arreglo u objeto y los expande en ortos sitios
// si se usa en un objeto y algún valor ya existía se sobrescribe dependiendo del orden de los valores del obj (si se hace el spread al final ese dato es el q quedará)
const frutas = ['Manzana', 'Pera', 'Piña', 'Melón','Uvas']

const comidaFavorita = ['Pizza', 'Sushi', ...frutas]
console.log(comidaFavorita)

const datosLogin={
    nombre: 'Arturo',
    correo: 'correo@correo.com',
    password: '123',
}

const usuario = {
    nombre: 'Carlos',
    edad: 25,
    ...datosLogin,
}

console.log(usuario)

//Parametros Rest  permite a una función tener numero indefinido de argumentos (los argumentos extra que encuentre los convierte en un arreglo)

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales)
}

registrarUsuario('Dayron', 'dasf@dfvdf.com', 25, 'España')

//Destructuración de Objetos   obtiene elementos o propiedades de un arreglo u objeto y los guarda en una variable

// const primerFruta = frutas[0]
// const segundaFruta = frutas[1]

const [primerFruta, segundaFruta, tercerFruta ] = frutas
console.log(primerFruta)

const {nombre, password}= datosLogin //también funciona con objetos
console.log(nombre,password) 

// const mostrarEdad = (nombre, edad) => {
//    console.log( `${nombre} tiene ${edad} años`);
// }
const mostrarEdad = ({nombre, edad}) => {
    console.log( `${nombre} tiene ${edad} años`);
}

//mostrarEdad(usuario.nombre, usuario.edad)
mostrarEdad(usuario)
