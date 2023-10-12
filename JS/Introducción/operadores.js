/*Operadores aritméticos
= asignación Asigna valor a una variable
+ suma
- resta
* multiplicación
/ división
% módulo/resto de división
++ aumento
-- decremento
*/ 
let num = 1
num = num + 2 //actualiza el valor de num (ahora será lo q ya estaba + 2) 
num ++ //esto le suma 1 al valor que ya estaba en 1
console.log(num)

/* Operadores de asignación
+= suma un número al valor 
-= resta un número al valor
*=
/=
%=
*/
let x = 5
x = x+5 // x += 5

console.log(x)

/*Operadores de comparación
== igual que
=== igual valor y tipo
!= diferente
!== diferente en valor y tipo
> mayor
< menor
>= mayor o igual
<= menor o igual
? operador ternario(si se cumple x condición)
*/
const comprobación = 5 > 1 //true
const comprobación1 = 5 == '5' //true
const comprobación2 = 5 === '5' //false
const comprobación3 = 5 > 1 ? 'El primer valor es mayor' : 'El segundo valor es mayor' //si se cumple la condición guarda en la variable el 1er valor, si no, guarda el 2do
console.log(comprobación3)


