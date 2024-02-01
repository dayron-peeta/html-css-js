
// permiten repetir una estructura de forma dinámica
//console.log('1')

const nombres = ['1','2','3','4','5','6',]

nombres.forEach((nombre) =>{//método para arreglos
    console.log(nombre)
})

//Ciclo For repite un bloque de código mientras se cumpla una condición (recibe 3 expresiones)
//expresión1 Se ejecuta solo una vez antes de comenzar a repetir el bloque de código
//expresión2 Condición, mientras se cumpla continúa el ciclo
//expresión3 Se ejecuta siempre cada vez q finaliza un bloque de código

for(let num = 1; num < 11; num++){
    console.log(num);
}

for(let num = nombres.length ; num > 0; num--){
    console.log(nombres[num-1]);
}

console.log(nombres)