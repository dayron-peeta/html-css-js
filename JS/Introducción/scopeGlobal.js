//Alcance o ámbito de variables
//desde q parte del código podremos acceder a ellas

//Variables globales: declaradas fuera de una función, se puede acceder a ellas desde cualquier parte del código.pueden ser const, let y var
var nombre = 'Dayron'

console.log('hola ' + nombre)
const saludo = () => {
    console.log(`Hola ${nombre} !`)

    nombre = 'Arturo'//puedo modificarlas también
    console.log(`El nuevo nombre es ${nombre}`)
}
saludo()