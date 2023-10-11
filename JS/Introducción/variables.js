//variable: espacio en memoria que se utiliza para guardar información a la cual se accederá
//declaración
var edad; //creación, variable global (con var se puede acceder a la variable desde cualquier parte de código) (el nombre debe empezar por letra,$ ó _ ,debe ser única y no una palabra reservada)
var edad = 27; //creación y asignación
// tipos de dato: string, number, boolean, object(conjuntos de valores agrupados), function(bloque de código reutilizable), null(variable sin valor DEFECTO), undefined(valor sin definir)

console.log(edad); //invocación de variable

let nombre = 'Dayron' //las cadenas de texto van entre comillas, variable local (con let y const solo se puede acceder a la variable dentro un bloque de código)
const correo = 'alala@correo.com' //declaración de constante


let telefono;
let pais;
let id;
//ó
let telefonox, paisx, idx; //se puede declarar varias variables en una sola línea

//operaciones aritméticas 
//se puede sumar, restar etc
const resultado = 4 + 4
// si sumamos strings las concatena
const nombre1 = 'Pepe'
const nombre2 = 'Alfredo'
const nombreCompleto = nombre1 +' '+ nombre2 //esto devuelve Pepe Alfredo


let miVariable = 'texto'
miVariable = 7 //se puede guardar datos de cualquier tipo ya q no son variables de un  tipo específico

