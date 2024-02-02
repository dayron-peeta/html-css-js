//Callbacks Funciones que se pueden pasar como parámetro a otra función para q esta pueda ejecutarlas. Se utiliza para trabajar con librerías o paquetes

//esta es la parte q hace la librería
const obtenerPostDeUsuario = (usuario, callback) =>{
    console.log(`Obteniendo los post de ${usuario}... `)

    setTimeout(()=>{
        let posts = ['post1','post2','post3']
        callback(posts)
    }, 2000)//ejecuta la función después q pasen 2000 mili-segundos (2s)
}

//así se utiliza la librería
obtenerPostDeUsuario('Carlos',(posts) => {
    console.log(posts)
}) //para utilizar funciones de librerías se llama a la función pasándole los parámetros requeridos y una función vacía (en la cual te va a devolver los resultados una vez ejecutado todo el proceso )
