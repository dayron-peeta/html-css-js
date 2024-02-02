//La herencia se utiliza para evitar duplicar código

class Usuario{
    constructor(usuario, password){
        this.usuario = usuario
        this.password = password
    }

    obtenerPosts(){
        const posts = ['post1' , 'post2']
        return posts
    }

}

class Moderador extends Usuario{ //extends define de que clase heredará sus propiedades y métodos
    constructor(usuario, password, permisos){
        super(usuario, password) //reutiliza el código de la clase desde la q hereda
        this.permisos = permisos //y se añaden especificidades a métodos ya existentes

    }

    borrarPost(id){ //se pueden crear métodos específicos para la clase hijo
        if(this.permisos.includes('borrar')){
            console.log(`El post con el id ${id} ha sido borrado`)
        } else {
            console.log('no tienes los permisos para borrar el post')
        }
    }
}

const usuario = new Usuario('Pepe' , '1234')
console.log(usuario.obtenerPosts())

const usuario2 = new Moderador('Arturo','456',['borrar','editar'] )
console.log(usuario2.obtenerPosts())
console.log(usuario2.permisos)
usuario2.borrarPost(7)