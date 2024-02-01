//forEach método de los arreglos para recorrer los elementos

const amigos = ['Alejandro','César','Manuel']

amigos.forEach(( amigo, index) =>{
    console.log(`El amigo #${index} es ${amigo}`)
})

//for in  permite recorrer las propiedades de un objeto
const persona ={ nombre: 'Clau', edad:27, correo: 'w@d.com',}

for(propiedad in persona){
    persona[propiedad] = ''//accede a las propiedades y borra el valor
}
console.log(persona)

//for of permite recorrer valores de un objeto iterable (Arreglos,Strings,mapas y listas de nodos etc)

const etiquetas = document.head.children //accede a todas las etiquetas html dentro de head en mi documento
console.log(etiquetas)

for (elemento of etiquetas){ //forEach funciona solamente en arreglos, para colecciones se utiliza for o for of
    console.log(elemento)
}

[...etiquetas].forEach((elemento) => console.log(elemento)) //utilizando spread se pueden guardar colecciones en arreglos para poder usar forEach