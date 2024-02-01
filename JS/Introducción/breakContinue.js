const nombres = ['Arturo','Andres','Alejandro','Roberto','Adrian','Antonio','Angel']

//Break sirve para salir de bloques tipo switch y para FORZAR la salida de un ciclo
for(let i = 0; i<nombres.length ; i++){
    if(nombres[i][0] !== 'A'){ //accede a la 1ra letra de cada String
        console.log(nombres[i] + ' no empieza con la letra A')
        break //detiene el código si algún nombre no comienza por la letra A
    }   
    console.log(nombres[i]) 
}

// sirve para saltar a la siguiente iteración 
for(let i = 0; i<nombres.length ; i++){
    if(nombres[i][0] !== 'A'){ //accede a la 1ra letra de cada String
        continue //si algún nombre no comienza por la letra A lo salta
    }   
    console.log(nombres[i]) 
}