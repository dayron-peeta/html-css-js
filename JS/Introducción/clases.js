// Clases plantillas para crear objetos(encapsula el código)
//Estructura -definición -propiedades(las variables dentro de las clases) -constructor(método especial para inicializar un obj creado a partir de una clase) -métodos(funcione dentro de una clase)

//El nombre de las clases se escribe con mayúscula para diferenciarlas de variables
class Usuario{
    tipo = 'usuario' //se usa = en lugar de :

    constructor(nombre, apellido ){
        this.nombre = nombre //la palabra 'this' dentro de una clase hace referencia a la propia clase
        this.apellido = apellido //si la propiedad no existe se crea en el acto
        console.log('nuevo usuario registrado!')
    }

    obtenerNombreCompleto(){ //se pueden declarar métodos a los cuales solo tendran acceso todos los objetos pertenecientes a ella
        console.log("Obteniendo datos...")
        return `${this.nombre} ${this.apellido}` //devuelve resultado
    }
}

const usuario = new Usuario('Pepe', 'Pérez') //creando un nuevo obj El método constructor se ejecuta de forma automática al usar la palabra 'new'
console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.obtenerNombreCompleto())
