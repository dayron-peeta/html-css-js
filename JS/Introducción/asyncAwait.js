//las promesas son código asíncrono (se ejecuta de fondo y no detiene la ejecución de las lineas posteriores)
const fetchPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1', 'post2']
            const error = true;

            if (error) {
                reject('fracasó')
            } else { resolve({ mensaje: 'éxito', posts }) } //con varios valores, debes devolver un objeto o un arreglo en lugar de pasar múltiples argumentos a la función `resolve()`
        }, 2000)
    })
}

//forma más limpia de hacerlo sin tener q usar then y catch
const mostrarPost = async() => { //se declara la función como asincrona
    try{ //aquí dentro también se trabaja con try y catch
        const posts = await fetchPost() //espera para ejecutar código hasta q responda la promesa
    console.log(posts)
    } catch(error){
        console.log(error)
    }
    
}

mostrarPost()