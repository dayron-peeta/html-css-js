const colores = ['Rojo', 'Verde' , 'Azul', 'Verde']
//.indexOf() :index de un elemento(el 1ro si hay más de 1)(si no lo encuentra devuelve -1)

console.log(colores.indexOf('Morado'))
console.log(colores.indexOf('Verde'))

//.lastIndexOf() :index de un elemento(el último si hay más de 1)(si no lo encuentra devuelve -1)

console.log(colores.lastIndexOf('Verde')) 

//.forEach(función) :recorre el arreglo y ejecuta una función por cada elemento(permite obtener el index)
colores.forEach((color, index) => {
    console.log(`color: ${color} (${index})`)
})

//.find() :recorre el arreglo y (igual q forEach pero) devuelve el 1er elemento retornado
const resultado = colores.find((color) => { //el return se puede obtener con una variable q guarde el resultado del llamado a la función
    if(color[0] === 'A'){return color } //los string se pueden tratar como arreglos
})
console.log(resultado)

//.map() :recorre el arreglo y ejecuta una función por cada elemento modificándolo (devuelve el resultado dentro de un array de igual tamaño al original)
const coloresMayusculas = colores.map((color) => {
    return color.toUpperCase
})
console.log(coloresMayusculas)

//.filter() :recorre el arreglo y ejecuta una función por cada elemento buscando coincidencias (devuelve el resultado dentro de un array)
const colores4Letras = colores.filter((color) => {
    if(color.length === 4){
        return color 
    }
})
console.log(colores4Letras)

//.includes() :el arreglo contiene el  elemento x? devuelve True/False
console.log(colores.includes('Azul'))

//.every() :realiza comprobación a cada elemento y devuelve True/False si todos la cumplen
const coloresValidos = colores.every((color) => {
    if(typeof color == 'string'){ //typeof: operador especial q comprueba el tipo de dato
        return true;
    } else{
        return false
    }
})
console.log('todos los colores son válidos: '+coloresValidos)

//.some() :realiza comprobación a cada elemento y devuelve True/False si alguno la cumplen
const coloresTodosString = colores.some((color) => {
    if(typeof color !== 'string'){ //typeof: operador especial q comprueba el tipo de dato
        return false;
    } else{
        return true
    }
})
console.log('Todos son string?: '+coloresTodosString)