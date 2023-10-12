/*Operadores lógicos
&& AND
|| OR
! NOT

*/

const nombre = 'Carlos'
const edad = 17
const tieneEntrada = true
const tienePermiso = true
const estaBetado = false 

const permitirAcceso = (edad >= 18 && tieneEntrada && !estaBetado) || (tienePermiso && tieneEntrada &&!estaBetado) //comprueba si la edad es mayor o igual a 18, tiene entrada y no está Betado ó tiene la entrada, el permiso y no está Betado *los paréntesis no son necesarios
console.log('Acceso permitido:' + permitirAcceso)
