class Usuario {
    constructor(nombre){
        this.nombre = nombre
    }

    static borrar(id_usuario){ //static lo convierte en estático, esta palabra permite acceder a propiedades y métodos de objetos sin inicializarlos
        console.log(`El usuario con id ${id_usuario} ha sido borrado de la base de datos`)
    }
    static registrados = 1000
}

// const usuario = new Usuario('Carlos','cor@reo.com') //inicializar un objeto
// console.log(usuario)
// usuario.borrarUsuario(1)
Usuario.borrar(1)//para llamar la función estática debe hacerse a través de la clase 
console.log(Usuario.registrados) //accediendo a propiedad estática