const fetchPost = () => {
    return new  Promise((resolve, reject) => {
        const posts = ['post1','post2']
        const error = true;

        if(error){ reject('fracasó')
        } else { resolve({mensaje:'éxito', posts})} //con varios valores, debes devolver un objeto o un arreglo en lugar de pasar múltiples argumentos a la función `resolve()`
    })
}

fetchPost().then(({ posts, mensaje }) => {
    console.log(mensaje)
    console.log(posts)
}).catch((error) => {  //se puede concatenar otro método
    console.log(error)
})

// const miVariable = fetchPost()
// console.log(miVariable) //si hacemos esto devuelve la promesa pero en estado pendiente