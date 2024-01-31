
//bloque de código ejecutable
function saludo(){ //definición
    console.log('hola')
}
//si una función no es invocada no se ejecuta
saludo() //invocación

const variable = saludo //las var pueden almacenar funciones
//code en HTML para invocar función
//<button onClick="saludo()"> Saludo </button>

//forma 2
const saludo2 = function (){
    console.log('hola2')
}
saludo2()

//función flecha
const fFlecha = () => {console.log('hola flecha')}
const fFlecha1linea = () => console.log('hola flecha 1 línea') //si tenemos solo una línea podemos eliminar llaves
fFlecha()
fFlecha1linea()