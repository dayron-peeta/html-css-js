

const amigos = ['Manuel', 'Pepe', "César"]
const arreglo= [1, 'pepe', true ,{propiedad: 'valor'}, [3, 2, 1]] //dentro puedo almacenar cualquier dato(num,txt,bool,obj,array) *los elementos de separan por coma
console.log(arreglo,  amigos[0]) //en la consola, en prototype podemos ver todos los métodos disponibles para el arreglo
//se accede a una posición específica utilizando [i] (el índice comienza en 0)

const colores = [] //arreglo vacío
colores[0]= 'Rojo'
colores[1]= 'Verde'
colores[3]= 'Blanco' //si saltamos un indice js lo deja vacío
colores[3]= 'Amarillo' //podemos sobrescribir datos
console.log(colores)
console.log('El arreglo colores tiene: ' + colores.length + ' colores' ) //devuelve en # la cantidad de elementos en el arreglo

colores.push('Azul') //función q agrega al final