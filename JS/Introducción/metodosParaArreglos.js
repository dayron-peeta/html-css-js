const colores = ['Rojo', 'Verde' , 'Azul']
const letras = ['d', 'h', 'e', 't']
const números = [2,4,1,3]

//los arreglos son objetos (tienen sus propiedades y métodos)
//PROPIEDADES
//.length :cantidad de elementos
console.log(colores.length) 

//MÉTODOS
//.toString() :convierte arreglo en String separando los elementos por coma
console.log(colores.toString())  
//document.body.innerHTML = colores.toString() //modifica el contenido del HTML

//.join(string separador) :convierte arreglo en String y separa cada elemento con lo q reciba como argumento
console.log(colores.join('-')) 

//.sort() :ordena de forma alfabética (modifica el arreglo)
console.log(letras.sort())
console.log(números.sort())

//.reverse() :ordena de forma alfabética descendente
console.log(letras.reverse())
console.log(números.reverse())

//.concat() :junta 2 arreglos (se llama desde el 1ro y se le pasa el 2do como argumento)
const LetrasYnumeros = letras.concat(números)
console.log(LetrasYnumeros)

//.push() :agrega un elemento al final (recibe el valor a añadir como argumento)
colores.push('Amarillo')
console.log(colores)

//.pop() :elimina el último elemento del arreglo
colores.pop()
console.log(colores)

//.shift() :elimina el 1er elemento y los corre(-1 de índice)
console.log(colores)
const colorEliminado = colores.shift()
console.log(colorEliminado)
console.log(colores)

//.unshift() :agrega un elemento al inicio y los corre (+1 de índice)
colores.unshift(colorEliminado)
console.log(colores)
console.log('aquiiiiiiiiiiiiiii')


//.splice(posición, cant_a_eliminar, 'nuevo_a_insertar','nuevo_a_insertar' ...) :agrega elemento(s) en la posición deseada
colores.splice(1,1,'Morado','Rosa')
console.log(colores)

//.slice(a_partir_de, hasta_antes_de) :copiar parte de un arreglo a otro(no elimina)
const coloresFavolitos = colores.slice(1,3)
console.log(colores)
console.log(coloresFavolitos)







